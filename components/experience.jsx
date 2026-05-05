"use client";

import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  ScrollControls,
  Sparkles,
  useGLTF,
  useScroll
} from "@react-three/drei";
import { Color, MathUtils, PCFShadowMap } from "three";

import { experienceProducts, modelsConfig } from "../lib/products";

function applyMaterialProfile(material, profile) {
  const rose = new Color("#C48A9A");
  const gold = new Color("#C6A96B");

  if ("envMapIntensity" in material) {
    material.envMapIntensity = 1.8;
  }

  if ("roughness" in material) {
    material.roughness = 0.22;
  }

  if ("metalness" in material) {
    material.metalness = 0.16;
  }

  if (profile === "glass") {
    if ("transmission" in material) {
      material.transmission = 0.9;
    }

    if ("ior" in material) {
      material.ior = 1.42;
    }

    if ("thickness" in material) {
      material.thickness = 1.2;
    }

    if ("roughness" in material) {
      material.roughness = 0.06;
    }

    if ("clearcoat" in material) {
      material.clearcoat = 1;
    }

    if ("attenuationColor" in material) {
      material.attenuationColor = rose.clone().lerp(gold, 0.25);
    }
  }

  if (profile === "diamond") {
    if ("transmission" in material) {
      material.transmission = 0.97;
    }

    if ("ior" in material) {
      material.ior = 2.1;
    }

    if ("thickness" in material) {
      material.thickness = 0.86;
    }

    if ("roughness" in material) {
      material.roughness = 0.02;
    }

    if ("clearcoat" in material) {
      material.clearcoat = 1;
    }
  }

  if (profile === "gold") {
    if ("color" in material) {
      material.color = gold.clone();
    }

    if ("metalness" in material) {
      material.metalness = 0.94;
    }

    if ("roughness" in material) {
      material.roughness = 0.16;
    }
  }

  if (profile === "velvet") {
    if ("color" in material) {
      material.color = rose.clone().offsetHSL(0.01, 0.05, -0.06);
    }

    if ("clearcoat" in material) {
      material.clearcoat = 0.4;
    }

    if ("roughness" in material) {
      material.roughness = 0.28;
    }

    if ("sheen" in material) {
      material.sheen = 0.7;
    }

    if ("sheenColor" in material) {
      material.sheenColor = rose.clone();
    }
  }

  material.transparent = true;
  material.needsUpdate = true;
}

function ExternalScrollSync({ scrollRef }) {
  const data = useScroll();

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return undefined;
    }

    const sync = () => {
      const maxScroll = element.scrollHeight - element.clientHeight;
      const nextOffset = maxScroll > 0 ? element.scrollTop / maxScroll : 0;
      data.scroll.current = nextOffset;
    };

    sync();
    element.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      element.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [data, scrollRef]);

  return null;
}

function FloatingProduct({ product }) {
  const scroll = useScroll();
  const groupRef = useRef(null);
  const materialsRef = useRef([]);
  const modelPath = `/models/${product.modelFile}`;
  const modelConfig = modelsConfig[product.modelFile];
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useLayoutEffect(() => {
    const materials = [];

    clonedScene.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;
      child.material = child.material.clone();
      applyMaterialProfile(child.material, product.profile);
      materials.push(child.material);
    });

    materialsRef.current = materials;
  }, [clonedScene, product.profile]);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    const lead = scroll.range(product.start - product.fadeIn, product.fadeIn);
    const trail = 1 - scroll.range(product.end - product.fadeOut, product.fadeOut);
    const alpha = MathUtils.clamp(Math.min(lead, trail), 0, 1);
    const span = Math.max(product.end - product.start, 0.0001);
    const phase = MathUtils.clamp((scroll.offset - product.start) / span, 0, 1);
    const sway = Math.sin(state.clock.elapsedTime * product.swaySpeed + product.swayPhase) * product.swayAmount;
    const depth = Math.cos(state.clock.elapsedTime * (product.swaySpeed * 0.7) + product.swayPhase) * product.depthAmount;

    const isCompact = state.size.width < 820;
    const activePosition = isCompact ? modelConfig.mobilePosition ?? modelConfig.position : modelConfig.position;
    const mobileScale = isCompact ? modelConfig.mobileScale : 1;
    const viewportScale = MathUtils.clamp(state.viewport.width / 11, 0.86, 1.08);
    const targetX = activePosition[0] + (1 - alpha) * product.entryOffset[0] + sway;
    const targetY =
      activePosition[1] +
      (1 - alpha) * product.entryOffset[1] +
      Math.sin(phase * Math.PI) * product.arcHeight;
    const targetZ = activePosition[2] + (1 - alpha) * product.entryOffset[2] + depth;
    const targetRotationX = modelConfig.rotation[0] + phase * product.rotationDrift[0];
    const targetRotationY = modelConfig.rotation[1] + phase * product.rotationDrift[1];
    const targetRotationZ = modelConfig.rotation[2] + phase * product.rotationDrift[2];
    const targetScale = modelConfig.scale * mobileScale * viewportScale * (0.78 + alpha * 0.22);

    groupRef.current.visible = alpha > 0.01;
    groupRef.current.position.x = MathUtils.damp(groupRef.current.position.x, targetX, 4, delta);
    groupRef.current.position.y = MathUtils.damp(groupRef.current.position.y, targetY, 4, delta);
    groupRef.current.position.z = MathUtils.damp(groupRef.current.position.z, targetZ, 4, delta);
    groupRef.current.rotation.x = MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 4, delta);
    groupRef.current.rotation.y = MathUtils.damp(groupRef.current.rotation.y, targetRotationY, 4, delta);
    groupRef.current.rotation.z = MathUtils.damp(groupRef.current.rotation.z, targetRotationZ, 4, delta);

    const nextScale = MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta);
    groupRef.current.scale.setScalar(nextScale);

    materialsRef.current.forEach((material) => {
      material.opacity = MathUtils.clamp(alpha * 1.08, 0, 1);
    });
  });

  return (
    <Float
      speed={product.floatSpeed}
      rotationIntensity={product.floatRotation}
      floatIntensity={product.floatHeight}
    >
      <group ref={groupRef}>
        <Center>
          <primitive object={clonedScene} />
        </Center>
      </group>
    </Float>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={1.2} color="#FFF8F3" />
      <hemisphereLight intensity={1.1} color="#FFF9F4" groundColor="#E8D7D3" />
      <pointLight position={[3.5, 2.8, 2.5]} intensity={30} color="#C48A9A" />
      <pointLight position={[-4.2, 1.8, -2.6]} intensity={28} color="#C6A96B" />
      <spotLight
        position={[0, 6.5, 4]}
        angle={0.34}
        intensity={65}
        penumbra={1}
        color="#FFF9F2"
        castShadow
        shadow-bias={-0.0001}
      />
      {experienceProducts.map((product) => (
        <FloatingProduct key={product.id} product={product} />
      ))}
      <Sparkles count={28} scale={9} size={1.8} speed={0.28} color="#D6A9B6" />
      <Environment resolution={256}>
        <Lightformer
          form="ring"
          intensity={2.8}
          color="#C6A96B"
          scale={6}
          position={[0, 4, -2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#C48A9A"
          scale={[1.5, 6, 1]}
          position={[-3.8, 1.4, 2.5]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color="#FFF8F2"
          scale={[8, 3.5, 1]}
          position={[0, -2, 4]}
        />
      </Environment>
      <ContactShadows
        position={[0, -2.55, 0]}
        opacity={0.22}
        scale={10}
        blur={3.2}
        far={6}
        color="#D4BCB6"
      />
    </>
  );
}

export default function Experience({ pages, scrollRef }) {
  return (
    <div className="pointer-events-none fixed inset-0">
      <Canvas
        className="fixed left-0 top-0 h-screen w-screen -z-10"
        camera={{ position: [0, 0.3, 9], fov: 24 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: true }}
        shadows={{ type: PCFShadowMap }}
      >
        <color attach="background" args={["#F6F1EE"]} />
        <fog attach="fog" args={["#F6F1EE", 10, 22]} />
        <ScrollControls
          pages={pages}
          damping={0.18}
          enabled={false}
          style={{ pointerEvents: "none", opacity: 0 }}
        >
          <ExternalScrollSync scrollRef={scrollRef} />
          <Suspense fallback={null}>
            <SceneContents />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

experienceProducts.forEach((product) => {
  useGLTF.preload(`/models/${product.modelFile}`);
});

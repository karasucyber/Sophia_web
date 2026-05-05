export const whatsappHref =
  "https://wa.me/5511999999999?text=Ola%2C%20sinto%20a%20sintonia%20com%20a%20Aura.%20Gostaria%20de%20conhecer%20os%20produtos.";

export const experiencePages = 5;

export const modelsConfig = {
  "perfume_bottle.glb": {
    scale: 2.1,
    position: [1.15, 0.35, 0.05],
    mobilePosition: [0.72, 0.28, 0.02],
    rotation: [0.18, 0.72, 0.08],
    mobileScale: 1.12
  },
  "lipstick.glb": {
    scale: 1.02,
    position: [-1.15, -0.05, -0.05],
    mobilePosition: [-0.62, 0.18, -0.05],
    rotation: [0.22, 0.98, -0.16],
    mobileScale: 1.08
  },
  "diamond_engagement_ring.glb": {
    scale: 1.35,
    position: [0.28, 0.05, 0],
    mobilePosition: [0.08, 0.14, 0],
    rotation: [0.34, 1.02, 0.08],
    mobileScale: 1.1
  },
  "bracelet__gold_diamant.glb": {
    scale: 1.24,
    position: [1.2, 0.55, -0.3],
    mobilePosition: [0.74, 0.44, -0.24],
    rotation: [0.24, 0.7, 0.18],
    mobileScale: 1.08
  },
  "diamond_crossover_hoop_earrings.glb": {
    scale: 1.08,
    position: [-1.05, 0.4, -0.2],
    mobilePosition: [-0.48, 0.28, -0.14],
    rotation: [0.16, 0.96, -0.08],
    mobileScale: 1.06
  }
};

export const experienceProducts = [
  {
    id: "perfume",
    name: "Perfume Signature",
    modelFile: "perfume_bottle.glb",
    profile: "glass",
    start: 0,
    end: 0.2,
    fadeIn: 0.12,
    fadeOut: 0.12,
    entryOffset: [2.8, -0.9, 1.4],
    rotationDrift: [0.24, 1.3, 0.18],
    arcHeight: 0.36,
    swayAmount: 0.1,
    swaySpeed: 0.85,
    swayPhase: 0.2,
    depthAmount: 0.18,
    floatSpeed: 1.2,
    floatRotation: 0.15,
    floatHeight: 0.32
  },
  {
    id: "lipstick",
    name: "Velvet Lip Ritual",
    modelFile: "lipstick.glb",
    profile: "velvet",
    start: 0.12,
    end: 0.38,
    fadeIn: 0.12,
    fadeOut: 0.12,
    entryOffset: [-2.7, -0.75, 1.6],
    rotationDrift: [0.25, 1.4, 0.24],
    arcHeight: 0.28,
    swayAmount: 0.12,
    swaySpeed: 0.95,
    swayPhase: 1.6,
    depthAmount: 0.14,
    floatSpeed: 1.25,
    floatRotation: 0.16,
    floatHeight: 0.38
  },
  {
    id: "ring",
    name: "Diamond Presence Ring",
    modelFile: "diamond_engagement_ring.glb",
    profile: "diamond",
    start: 0.32,
    end: 0.58,
    fadeIn: 0.12,
    fadeOut: 0.12,
    entryOffset: [0.8, -0.65, 1.9],
    rotationDrift: [0.28, 1.8, 0.3],
    arcHeight: 0.22,
    swayAmount: 0.08,
    swaySpeed: 0.78,
    swayPhase: 2.4,
    depthAmount: 0.16,
    floatSpeed: 1.15,
    floatRotation: 0.18,
    floatHeight: 0.28
  },
  {
    id: "bracelet",
    name: "Golden Aura Bracelet",
    modelFile: "bracelet__gold_diamant.glb",
    profile: "gold",
    start: 0.52,
    end: 0.78,
    fadeIn: 0.12,
    fadeOut: 0.12,
    entryOffset: [2.5, 0.4, 1.5],
    rotationDrift: [0.2, 1.45, 0.32],
    arcHeight: 0.32,
    swayAmount: 0.12,
    swaySpeed: 0.82,
    swayPhase: 3.2,
    depthAmount: 0.2,
    floatSpeed: 1.08,
    floatRotation: 0.16,
    floatHeight: 0.35
  },
  {
    id: "earrings",
    name: "Crossover Hoop Earrings",
    modelFile: "diamond_crossover_hoop_earrings.glb",
    profile: "diamond",
    start: 0.72,
    end: 1,
    fadeIn: 0.12,
    fadeOut: 0.14,
    entryOffset: [-2.4, 0.8, 1.8],
    rotationDrift: [0.2, 1.55, 0.26],
    arcHeight: 0.38,
    swayAmount: 0.12,
    swaySpeed: 0.88,
    swayPhase: 4.4,
    depthAmount: 0.18,
    floatSpeed: 1.18,
    floatRotation: 0.18,
    floatHeight: 0.34
  }
];

export const manifestoSections = [
  {
    id: "section-essence",
    eyebrow: "Essencia",
    title: "Sofisticada e intencional.",
    body: "Aura vai alem do que se ve. A luz rosada encontra o dourado com delicadeza, e cada silencio do layout deixa o objeto respirar atras do texto.",
    align: "right",
    cta: false
  },
  {
    id: "section-confidence",
    eyebrow: "Presenca",
    title: "Confianca nao se forca. Se percebe.",
    body: "O scroll conduz a experiencia como um compasso sereno. As joias e os cosmeticos atravessam o fundo como se ocupassem um aquario de ar, vidro e neblina clara.",
    align: "left",
    cta: false
  },
  {
    id: "section-trace",
    eyebrow: "Desfecho",
    title: "E sobre a aura que voce deixa.",
    body: "No final, nao e so sobre o que voce usa. E sobre a memoria suave que fica no espaco depois da passagem, com presenca, calma e intencao.",
    align: "right",
    cta: true
  }
];

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProductCarousel({ items }) {
  const trackRef = useRef(null);

  const moveTrack = (direction) => {
    if (!trackRef.current) {
      return;
    }

    const amount = Math.max(trackRef.current.clientWidth * 0.78, 280) * direction;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="glass-panel rounded-[2.3rem] px-5 py-6 md:px-8 md:py-8">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">Curadoria Final</p>
          <h3 className="mt-3 font-display text-[2.2rem] leading-tight text-[#241B18] md:text-[3rem]">
            Toque em uma peca e caia no WhatsApp.
          </h3>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => moveTrack(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(198,169,107,0.28)] text-[#C6A96B] transition hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.12)]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => moveTrack(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(198,169,107,0.28)] text-[#C6A96B] transition hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.12)]"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative min-w-[78vw] snap-center overflow-hidden rounded-[2rem] border border-[rgba(198,169,107,0.18)] bg-[rgba(255,250,246,0.72)] shadow-[0_24px_50px_rgba(92,64,58,0.14)] md:min-w-[27rem]"
          >
            <div className="relative h-[26rem] overflow-hidden md:h-[32rem]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 78vw, 27rem"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,12,0)_15%,rgba(20,14,12,0.22)_72%,rgba(20,14,12,0.48)_100%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#F0DCD8]">{item.category}</p>
                <h4 className="mt-3 max-w-[16rem] font-display text-[2rem] leading-none text-[#FFF7F0] md:text-[2.4rem]">
                  {item.name}
                </h4>
              </div>
              <span className="mb-1 inline-flex rounded-full border border-[rgba(255,248,240,0.45)] bg-[rgba(255,248,240,0.12)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-[#FFF7F0] backdrop-blur-sm transition group-hover:border-[#FFF7F0] group-hover:bg-[rgba(255,248,240,0.2)]">
                WhatsApp
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

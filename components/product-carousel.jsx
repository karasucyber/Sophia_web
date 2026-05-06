"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.6 14.93L2 22l5.23-1.36A9.94 9.94 0 0 0 12 22h.01A9.99 9.99 0 0 0 22 12a9.9 9.9 0 0 0-2.95-7.06ZM12 20.3a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31A8.22 8.22 0 1 1 12 20.3Zm4.52-6.16c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.17-.29.19-.54.07-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.03 2.58.12.17 1.77 2.7 4.28 3.8.6.26 1.07.42 1.44.54.6.19 1.15.17 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

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
    <div className="glass-panel rounded-[2rem] px-4 py-5 sm:px-5 sm:py-6 md:rounded-[2.3rem] md:px-8 md:py-8">
      <div className="mb-5 flex items-end justify-between gap-4 md:mb-6 md:gap-6">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">Curadoria Final</p>
          <h3 className="mt-3 max-w-[13rem] font-display text-[1.95rem] leading-[0.95] text-[#241B18] sm:max-w-[18rem] sm:text-[2.25rem] md:max-w-none md:text-[3rem]">
            Toque em uma peca e caia no WhatsApp.
          </h3>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => moveTrack(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(198,169,107,0.28)] text-[#C6A96B] transition hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.12)]"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => moveTrack(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(198,169,107,0.28)] text-[#C6A96B] transition hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.12)]"
          >
            {">"}
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 md:pb-3"
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative min-w-[76vw] snap-center overflow-hidden rounded-[1.7rem] border border-[rgba(198,169,107,0.18)] bg-[rgba(255,250,246,0.72)] shadow-[0_24px_50px_rgba(92,64,58,0.14)] sm:min-w-[64vw] md:min-w-[23rem] md:rounded-[2rem]"
          >
            <div className="relative h-[18rem] overflow-hidden sm:h-[20rem] md:h-[26rem]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 76vw, (max-width: 768px) 64vw, 23rem"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,12,0)_15%,rgba(20,14,12,0.22)_72%,rgba(20,14,12,0.48)_100%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5 md:gap-4 md:p-6">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-[#F0DCD8] md:text-[0.72rem] md:tracking-[0.34em]">
                  {item.category}
                </p>
                <h4 className="mt-2 max-w-[9rem] font-display text-[1.45rem] leading-[0.96] text-[#FFF7F0] sm:max-w-[11rem] sm:text-[1.7rem] md:mt-3 md:max-w-[14rem] md:text-[2.1rem]">
                  {item.name}
                </h4>
              </div>
              <span className="mb-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,248,240,0.45)] bg-[rgba(255,248,240,0.12)] text-[#FFF7F0] backdrop-blur-sm transition group-hover:border-[#FFF7F0] group-hover:bg-[rgba(255,248,240,0.2)] md:h-12 md:w-12">
                <WhatsAppIcon />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

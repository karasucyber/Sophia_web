"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { manifestoSections, whatsappHref } from "../lib/products";

function CopyBlock({ align = "left", eyebrow, title, body, cta = false }) {
  const alignment =
    align === "right" ? "ml-auto items-start text-left" : "mr-auto items-start text-left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel flex max-w-[40rem] flex-col rounded-[2rem] px-7 py-8 md:px-10 md:py-12 ${alignment}`}
    >
      <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">{eyebrow}</p>
      <h2 className="mt-5 font-display text-[2.8rem] leading-[0.95] text-[#241B18] md:text-[4.4rem]">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#655550] md:text-lg md:leading-9">{body}</p>
      {cta ? (
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full border border-[#C6A96B] bg-[#C6A96B] px-8 py-4 text-sm uppercase tracking-[0.3em] text-[#FFF8F0] transition hover:-translate-y-0.5 hover:bg-[#B99859]"
        >
          Comprar Produto
        </Link>
      ) : null}
    </motion.article>
  );
}

export default function UILayer({ scrollRef }) {
  return (
    <div ref={scrollRef} className="relative z-10 h-screen overflow-y-auto">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-24 bg-[linear-gradient(180deg,rgba(246,241,238,0.96),rgba(246,241,238,0))]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(0deg,rgba(246,241,238,0.92),rgba(246,241,238,0))]" />
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 lg:px-16">
        <header className="sticky top-0 z-30 flex items-center justify-between py-7 backdrop-blur-[8px]">
          <p className="font-display text-[1.85rem] tracking-[0.14em] text-[#2B211E]">AURA</p>
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#B18994]">Presence and Essence</p>
        </header>

        <section className="flex min-h-[calc(100vh-5.5rem)] items-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[48rem]"
          >
            <p className="text-[0.78rem] uppercase tracking-[0.42em] text-[#B78594]">Manifesto Sensorial</p>
            <h1 className="mt-6 font-display text-[3.7rem] leading-[0.92] text-[#211917] md:text-[6rem] xl:text-[7rem]">
              A aura nasce
              <span className="gold-text block">de dentro</span>
              para fora.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#61524D] md:text-xl md:leading-10">
              Do sentir, do se reconhecer e do se cuidar. O fundo fica livre para respirar, enquanto a
              narrativa avanca com calma, espaco e presenca.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px w-20 bg-[rgba(198,169,107,0.45)]" />
              <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#AB8650]">Deslize para sentir</p>
            </div>
          </motion.div>
        </section>

        {manifestoSections.map((section, index) => (
          <section
            key={section.id}
            className={`flex min-h-screen items-center py-24 md:py-32 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <CopyBlock
              align={section.align}
              eyebrow={section.eyebrow}
              title={section.title}
              body={section.body}
              cta={section.cta}
            />
          </section>
        ))}

        <section className="flex min-h-[72vh] items-end py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel mb-10 flex w-full flex-col gap-6 rounded-[2rem] px-7 py-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-10"
          >
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">Aura</p>
              <h2 className="mt-4 font-display text-[2.5rem] leading-tight text-[#241B18] md:text-[3.6rem]">
                No final, nao e so sobre o que voce usa.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#655550]">
              E sobre a maneira como a sua presenca ocupa o espaco. O objeto flutua, a luz respira e a
              memoria fica.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

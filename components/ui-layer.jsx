"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ProductCarousel from "./product-carousel";
import { manifestoSections, productCarouselItems, whatsappHref } from "../lib/products";

function CopyBlock({ align = "left", eyebrow, title, body, cta = false }) {
  const alignment =
    align === "right" ? "ml-auto items-start text-left" : "mr-auto items-start text-left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel flex max-w-[40rem] flex-col rounded-[1.7rem] px-5 py-6 sm:px-6 sm:py-7 md:rounded-[2rem] md:px-10 md:py-12 ${alignment}`}
    >
      <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2.2rem] leading-[0.95] text-[#241B18] sm:text-[2.55rem] md:mt-5 md:text-[4.4rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#655550] sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9">
        {body}
      </p>
      {cta ? (
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex rounded-full border border-[#C6A96B] bg-[#C6A96B] px-6 py-3 text-[0.76rem] uppercase tracking-[0.24em] text-[#FFF8F0] transition hover:-translate-y-0.5 hover:bg-[#B99859] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.3em]"
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
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-20 bg-[linear-gradient(180deg,rgba(246,241,238,0.96),rgba(246,241,238,0))] md:h-24" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-20 bg-[linear-gradient(0deg,rgba(246,241,238,0.92),rgba(246,241,238,0))] md:h-24" />
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 md:px-10 lg:px-16">
        <header className="sticky top-0 z-30 flex items-start justify-between gap-4 py-5 backdrop-blur-[8px] sm:items-center sm:py-7">
          <p className="font-display text-[1.65rem] tracking-[0.1em] text-[#2B211E] sm:text-[1.85rem] sm:tracking-[0.14em]">
            AURA
          </p>
          <p className="max-w-[10.5rem] text-right text-[0.62rem] uppercase leading-5 tracking-[0.28em] text-[#B18994] sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.42em]">
            Presence and Essence
          </p>
        </header>

        <section className="flex min-h-[calc(100svh-4.75rem)] items-center py-10 sm:min-h-[calc(100vh-5.5rem)] sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[48rem]"
          >
            <p className="text-[0.78rem] uppercase tracking-[0.42em] text-[#B78594]">Manifesto Sensorial</p>
            <h1 className="mt-5 font-display text-[3.05rem] leading-[0.9] text-[#211917] sm:text-[3.7rem] md:mt-6 md:text-[6rem] xl:text-[7rem]">
              A aura nasce
              <span className="gold-text block">de dentro</span>
              para fora.
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-[#61524D] sm:mt-8 sm:text-base sm:leading-8 md:text-xl md:leading-10">
              Do sentir, do se reconhecer e do se cuidar. O fundo fica livre para respirar, enquanto a
              narrativa avanca com calma, espaco e presenca.
            </p>
            <div className="mt-9 flex items-center gap-4 sm:mt-12 sm:gap-6">
              <div className="h-px w-14 bg-[rgba(198,169,107,0.45)] sm:w-20" />
              <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#AB8650] sm:text-[0.72rem] sm:tracking-[0.38em]">
                Deslize para sentir
              </p>
            </div>
          </motion.div>
        </section>

        {manifestoSections.map((section, index) => (
          <section
            key={section.id}
            className={`flex min-h-[92svh] items-center py-14 sm:min-h-screen sm:py-24 md:py-32 ${
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

        <section className="flex min-h-[72vh] items-end py-12 sm:py-16 md:py-24">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel mb-8 flex w-full flex-col gap-5 rounded-[1.7rem] px-5 py-6 sm:mb-10 sm:px-7 sm:py-8 md:flex-row md:items-end md:justify-between md:rounded-[2rem] md:px-10 md:py-10"
            >
              <div className="max-w-3xl">
                <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#B78594]">Aura</p>
                <h2 className="mt-3 font-display text-[2.1rem] leading-[0.98] text-[#241B18] sm:mt-4 sm:text-[2.5rem] md:text-[3.6rem]">
                  No final, nao e so sobre o que voce usa.
                </h2>
              </div>
              <p className="max-w-xl text-[0.98rem] leading-7 text-[#655550] sm:text-base sm:leading-8">
                E sobre a maneira como a sua presenca ocupa o espaco. O objeto flutua, a luz respira e a
                memoria fica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCarousel items={productCarouselItems} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

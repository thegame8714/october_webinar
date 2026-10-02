"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-navy/10 border-t border-b border-navy/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-navy">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple/10 text-purple transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <p
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="pb-5 pr-10 text-navy/70"
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

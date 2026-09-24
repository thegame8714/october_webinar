"use client";

import { useState } from "react";

// TODO: keep in sync with your actual registration/VIP offer details
const faqs = [
  {
    question: "Is this actually worth my time, or a sales pitch in disguise?",
    answer:
      "The first 40 minutes are a full, real teaching session — you'll walk away with the framework whether or not you're ever interested in anything else. Near the end, I'll briefly mention how I help people go deeper, if that's useful to you.",
  },
  {
    question: "Do I need a specific underperformer in mind?",
    answer:
      "It helps, but it's not required — the framework applies to any team member.",
  },
  {
    question: "Is this recorded if I can't make it live?",
    answer:
      "The replay is only available with VIP access ($67) — see the option at registration. Live attendance is free either way.",
  },
  {
    question: "What's the cost?",
    answer:
      "Free to attend live. Optional $67 VIP add-on includes the recording.",
  },
  {
    question: "Is this for new managers, experienced managers, or both?",
    answer: "Both, the 4 U's apply regardless of tenure.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
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
                {isOpen && (
                  <p className="pb-5 pr-10 text-navy/70">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

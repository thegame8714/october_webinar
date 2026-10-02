"use client";

import { useState } from "react";

// TODO: keep in sync with your actual registration/VIP offer details
const faqs = [
  {
    question: "Is this worth my time, or a sales pitch in disguise?",
    answer:
      "The first 40 minutes are real teaching. You'll leave with the framework, even if you want nothing more. Near the end, I'll briefly share how I help people go deeper, if that helps you.",
  },
  {
    question: "Do I need a specific underperformer in mind?",
    answer:
      "It helps, but you don't need one. The framework works for any team member.",
  },
  {
    question: "Is this recorded if I can't make it live?",
    answer:
      "Only VIP members get the replay ($67). You'll see the VIP option right after you register. Live attendance is free either way.",
  },
  {
    question: "What's the cost?",
    answer:
      "It's free to attend live. The VIP add-on is optional and costs $67. It includes the recording.",
  },
  {
    question: "Is this for new managers, experienced managers, or both?",
    answer: "Both. The 4 U's work no matter how long you've managed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Got questions? Here are the answers.
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

"use client";

import { motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  description?: string;
  items?: FaqItem[];
  sectionClassName?: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "What is the average delivery time?",
    answer:
      "For a smaller-scale project, production typically takes around 2–3 weeks. More complex productions may require 6–8 weeks, depending on the scope and specific requirements of the project.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. I generally include revisions as part of the creative process, based on the scope agreed upon at the beginning of the project.",
  },
  {
    question: "Do you work alone or as part of a team?",
    answer:
      "I’m comfortable working independently as well as collaborating within an existing team. I adapt easily to different workflows, creative environments and project requirements.",
  },
  {
    question: "What delivery formats do you offer?",
    answer:
      "Projects can be delivered in formats such as MP4, MOV or AVI, with resolutions up to 4K,depending on the project requirements and intended platform.",
  },
];

export function FaqSection({
  title,
  description,
  items,
  sectionClassName,
}: FaqSectionProps) {
  const sectionClasses = [
    "py-20 bg-gradient-to-r from-gray-900 to-black",
    sectionClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const faqs = items?.length ? items : defaultItems;

  return (
    <section className={sectionClasses}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair text-white mb-6">
            {title}
          </h2>
          {description ? (
            <p className="text-xl text-gray-400">{description}</p>
          ) : null}
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

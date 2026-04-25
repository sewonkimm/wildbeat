'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';
import { faqItems } from '@/data/contact';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-background section-padding">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="section-label">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title mt-3">
            자주 묻는 질문
          </motion.h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} layout>
              <button
                className="flex justify-between items-center w-full py-4 border-b border-border cursor-pointer text-left"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-body-lg text-foreground pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-body-md text-text-secondary pb-4 pt-3">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

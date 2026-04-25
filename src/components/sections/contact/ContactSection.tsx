'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactSection() {
  return (
    <section className="bg-background section-padding">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.p variants={fadeInUp} className="section-label">
            상담 신청
          </motion.p>
          <motion.p variants={fadeInUp} className="section-desc mt-3">
            편리한 방법으로 무료 상담을 신청하세요. 담당자가 빠르게 연락드립니다.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

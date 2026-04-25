'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function PricingCTA() {
  return (
    <section className="bg-background section-padding-sm">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="card-gold p-8 md:p-12 max-w-2xl mx-auto text-center flex flex-col items-center gap-5"
        >
          <motion.p variants={fadeInUp} className="section-label">
            수강료 안내
          </motion.p>
          <motion.p variants={fadeInUp} className="text-body-lg text-text-secondary">
            수강료는 전공, 수업 횟수, 과정 유형에 따라 달라집니다.
            <br />
            무료 상담을 통해 나에게 맞는 플랜을 확인해 보세요.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="primaryLg" href="/contact" showArrow>
              맞춤 상담 받기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

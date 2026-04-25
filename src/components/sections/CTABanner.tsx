'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function CTABanner() {
  return (
    <section className="bg-gold-subtle section-padding-sm">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeInUp}
           
            className="text-heading-xl text-foreground text-balance"
          >
            음악의 꿈, 지금 시작하세요
          </motion.h2>
          <motion.p
            variants={fadeInUp}
           
            className="text-body-lg text-text-secondary"
          >
            무료 상담을 통해 나에게 맞는 커리큘럼을 확인해 보세요.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="primaryLg" href="/contact" showArrow>
              무료 상담 예약하기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

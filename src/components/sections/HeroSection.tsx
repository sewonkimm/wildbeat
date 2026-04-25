'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { fadeInUp, viewportConfig } from '@/lib/motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gold-subtle opacity-60" />
      <div className="absolute inset-0 bg-purple-subtle opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,168,67,0.08) 0%, transparent 70%)',
        }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 container-base text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className="flex flex-col items-center gap-6"
        >
          {/* 레이블 배지 */}
          <motion.div variants={fadeInUp}>
            <span className="badge-gold">와일드 비트 실용 음악 학원</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
           
            className="font-display text-display-xl text-foreground text-balance"
          >
            당신의 음악,
            <br />
            여기서 시작됩니다
          </motion.h1>

          {/* 서브카피 */}
          <motion.p
            variants={fadeInUp}
           
            className="text-body-xl text-text-secondary max-w-lg text-balance"
          >
            보컬 · 기타 · 드럼 · 건반 · 작곡/미디
            <br />
            실용 음악 전문 교육
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeInUp}>
            <Button variant="primaryLg" href="/contact" showArrow>
              수강 상담 신청
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}

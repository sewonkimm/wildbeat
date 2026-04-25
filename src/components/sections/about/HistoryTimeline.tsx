'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/about';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function HistoryTimeline() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-base">
        {/* 섹션 헤더 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p variants={fadeInUp} className="section-label mb-3">
            연혁
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            와일드 비트의 발자취
          </motion.h2>
        </motion.div>

        {/* 타임라인 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* 세로 라인 */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <motion.div key={item.year} variants={fadeInUp} className="flex gap-6 items-start">
                  {/* 연도 */}
                  <div className="w-20 shrink-0 text-right">
                    <span className="font-display text-primary text-heading-sm">{item.year}</span>
                  </div>

                  {/* 노드 */}
                  <div className="relative flex items-center justify-center shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-gold z-10" />
                  </div>

                  {/* 이벤트 */}
                  <p className="text-body-md text-text-secondary pt-0.5">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

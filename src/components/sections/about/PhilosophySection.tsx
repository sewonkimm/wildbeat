'use client';

import { motion } from 'framer-motion';
import { BookOpen, Mic, Users } from 'lucide-react';
import { coreValues } from '@/data/about';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-10 h-10 text-primary" />,
  Mic: <Mic className="w-10 h-10 text-primary" />,
  Users: <Users className="w-10 h-10 text-primary" />,
};

export function PhilosophySection() {
  return (
    <section className="bg-background section-padding">
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
            교육 철학
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance mb-4">
            음악으로 성장하는 모든 순간
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-text-secondary max-w-3xl mx-auto"
          >
            와일드 비트 실용 음악 학원은 단순한 기술 교육을 넘어, 음악을 통해 자신을 표현하고
            성장하는 공간입니다. 체계적인 커리큘럼과 현직 뮤지션 강사진의 실전 경험을 바탕으로,
            모든 수강생이 자신만의 음악적 정체성을 찾아갈 수 있도록 함께합니다.
          </motion.p>
        </motion.div>

        {/* 핵심 가치 카드 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {coreValues.map((value) => (
            <motion.div key={value.titleEn} variants={fadeInUp} className="card-base p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-card inline-flex">
                  {iconMap[value.icon]}
                </div>
              </div>
              <h3 className="text-heading-sm text-foreground mb-1">{value.title}</h3>
              <p className="text-label-sm text-text-muted uppercase tracking-widest mb-3">
                {value.titleEn}
              </p>
              <p className="text-body-sm text-text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

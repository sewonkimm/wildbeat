'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { instructors } from '@/data/instructors';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function InstructorsPreview() {
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
            강사진
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            현직 뮤지션 출신 전문 강사진이
            <br />
            여러분의 음악 여정을 함께합니다
          </motion.h2>
        </motion.div>

        {/* 강사 카드 그리드 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              variants={fadeInUp}
             
              className="card-hover overflow-hidden"
            >
              {/* 사진 플레이스홀더 */}
              <div className="aspect-square bg-surface-light flex items-center justify-center rounded-t-card">
                <User className="w-20 h-20 text-text-muted" />
              </div>

              {/* 정보 */}
              <div className="p-6">
                <h3 className="text-heading-sm text-foreground">{instructor.name}</h3>
                <p className="text-body-sm text-primary mt-1">{instructor.role}</p>
                <p className="text-body-sm text-text-muted mt-1">{instructor.experience}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 하단 CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" href="/instructors">
            전체 강사진 보기
          </Button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { courseTypes } from '@/data/curriculum';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function CourseTypeSection() {
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
            과정 안내
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            나에게 맞는 과정을 찾아보세요
          </motion.h2>
        </motion.div>

        {/* 과정 카드 그리드 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {courseTypes.map((type) => (
            <motion.div key={type.id} variants={fadeInUp} className="card-gold p-6 flex flex-col gap-5">
              {/* 배지 + 이름 */}
              <div>
                <span className="badge-gold mb-3 inline-flex">{type.nameEn}</span>
                <h3 className="text-heading-md text-foreground">{type.name}</h3>
              </div>

              {/* 대상 */}
              <div>
                <p className="text-label-sm text-text-muted uppercase tracking-widest mb-2">
                  대상
                </p>
                <ul className="flex flex-col gap-1.5">
                  {type.target.map((t) => (
                    <li key={t} className="text-body-sm text-text-secondary">
                      · {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 특징 */}
              <div>
                <p className="text-label-sm text-text-muted uppercase tracking-widest mb-2">
                  특징
                </p>
                <ul className="flex flex-col gap-2">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-body-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 기간 + 버튼 */}
              <div className="mt-auto flex flex-col gap-3">
                <p className="text-body-sm text-text-muted">
                  수강 기간: <span className="text-foreground">{type.duration}</span>
                </p>
                <Button variant="secondary" href="/contact" showArrow>
                  상담 신청
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

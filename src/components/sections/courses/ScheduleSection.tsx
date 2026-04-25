'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { schedule, processSteps } from '@/data/curriculum';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const DAYS = ['월', '화', '수', '목', '금', '토'];

export function ScheduleSection() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-base">
        {/* 시간표 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="mb-4"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <p className="section-label mb-3">수업 시간표</p>
            <h2 className="section-title text-balance">수업 시간 안내</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <div className="bg-surface-light rounded-card min-w-[400px]">
              {/* 헤더 */}
              <div className="grid grid-cols-7 border-b border-border">
                <div className="p-4">
                  <span className="text-label-sm text-text-muted uppercase">시간</span>
                </div>
                {DAYS.map((day) => (
                  <div key={day} className="p-4 text-center">
                    <span className="text-label-sm text-text-muted uppercase">{day}</span>
                  </div>
                ))}
              </div>

              {/* 행 */}
              {schedule.map((slot, i) => (
                <div
                  key={slot.time}
                  className={`grid grid-cols-7 ${i < schedule.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="p-4 flex items-center">
                    <span className="text-body-sm text-foreground font-medium">{slot.time}</span>
                  </div>
                  {slot.days.map((available, di) => (
                    <div key={di} className="p-4 flex items-center justify-center">
                      {available ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-body-sm text-text-muted italic mt-4 text-center">
            * 시간표는 변경될 수 있습니다. 정확한 일정은 상담 시 확인해 주세요.
          </motion.p>
        </motion.div>

        {/* 구분선 */}
        <div className="divider my-12" />

        {/* 수강 절차 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <p className="section-label mb-3">수강 절차</p>
            <h2 className="section-title text-balance">이렇게 시작하세요</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {processSteps.map((step, i) => (
              <motion.div key={step.step} variants={fadeInUp} className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 md:text-center">
                {/* 스텝 번호 */}
                <div className="shrink-0">
                  <span className="font-display text-display-lg text-primary leading-none">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>

                {/* 화살표 (데스크탑, 마지막 아이템 제외) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    {/* 화살표는 relative 부모가 없어서 그리드 내에선 생략, 텍스트 표현 */}
                  </div>
                )}

                <div className="md:mt-4">
                  <h3 className="text-heading-sm text-foreground mb-1">{step.title}</h3>
                  <p className="text-body-sm text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

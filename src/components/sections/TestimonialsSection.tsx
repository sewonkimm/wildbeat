'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Trophy, Mic, Award } from 'lucide-react';
import { testimonials, achievements } from '@/data/testimonials';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const achievementIcons: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-8 h-8" />,
  Mic: <Mic className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
};

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
            수강생 후기
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            수강생 후기 &amp; 성과
          </motion.h2>
        </motion.div>

        {/* 후기 슬라이더 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={fadeInUp}
         
          className="max-w-3xl mx-auto"
        >
          <div className="relative min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card-gold p-8 md:p-10 w-full"
              >
                <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                <p className="text-body-xl text-foreground italic leading-relaxed mb-6">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div>
                  <p className="text-label-lg text-foreground">{testimonials[current].name}</p>
                  <p className="text-body-sm text-text-muted mt-0.5">{testimonials[current].detail}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 인디케이터 도트 */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`후기 ${idx + 1}번으로 이동`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-primary w-6' : 'bg-border hover:bg-border-light'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* 성과 배지 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
             
              className="card-gold p-6 text-center flex flex-col items-center gap-3"
            >
              <span className="text-primary">
                {achievementIcons[item.icon] ?? <Trophy className="w-8 h-8" />}
              </span>
              <p className="font-display text-heading-lg text-primary">{item.value}</p>
              <p className="text-body-sm text-text-secondary">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

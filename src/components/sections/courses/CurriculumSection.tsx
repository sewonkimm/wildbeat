'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Mic, Guitar, Drum, Music2, Music } from 'lucide-react';
import { curriculumDetails } from '@/data/curriculum';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const iconMap: Record<string, React.ReactNode> = {
  vocal: <Mic className="w-16 h-16 text-text-muted" />,
  guitar: <Guitar className="w-16 h-16 text-text-muted" />,
  drums: <Drum className="w-16 h-16 text-text-muted" />,
  keyboard: <Music2 className="w-16 h-16 text-text-muted" />,
  'composition-midi': <Music className="w-16 h-16 text-text-muted" />,
};

export function CurriculumSection() {
  const [activeId, setActiveId] = useState(curriculumDetails[0].id);
  const active = curriculumDetails.find((c) => c.id === activeId) ?? curriculumDetails[0];

  return (
    <section className="bg-background section-padding">
      <div className="container-base">
        {/* 섹션 헤더 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-14"
        >
          <motion.p variants={fadeInUp} className="section-label mb-3">
            전공별 커리큘럼
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            전문 강사와 함께하는 맞춤 교육
          </motion.h2>
        </motion.div>

        {/* 탭 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide justify-center">
          {curriculumDetails.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-4 py-2 rounded-button text-label-md font-semibold whitespace-nowrap transition-all duration-250 ease-out ${
                activeId === item.id
                  ? 'bg-primary text-text-inverse'
                  : 'bg-surface text-text-secondary hover:text-foreground'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 상세 콘텐츠 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* 좌측: 플레이스홀더 */}
            <div className="bg-surface-light aspect-video rounded-card flex items-center justify-center">
              {iconMap[active.id]}
            </div>

            {/* 우측: 상세 정보 */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-label-sm text-primary uppercase tracking-widest mb-2">
                  {active.nameEn}
                </p>
                <h3 className="text-heading-lg text-foreground mb-3">{active.name}</h3>
                <p className="text-body-md text-text-secondary">{active.intro}</p>
              </div>

              <div>
                <p className="text-label-md text-foreground font-semibold mb-3">학습 내용</p>
                <ul className="flex flex-col gap-2.5">
                  {active.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-body-md text-text-secondary">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

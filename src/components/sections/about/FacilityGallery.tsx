'use client';

import { motion } from 'framer-motion';
import { Music, Radio, Theater } from 'lucide-react';
import { facilities } from '@/data/about';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const iconMap: Record<string, React.ReactNode> = {
  Music: <Music className="w-12 h-12 text-text-muted" />,
  Radio: <Radio className="w-12 h-12 text-text-muted" />,
  Theater: <Theater className="w-12 h-12 text-text-muted" />,
};

export function FacilityGallery() {
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
            시설 안내
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            최고의 환경에서 음악에 집중하세요
          </motion.h2>
        </motion.div>

        {/* 시설 카드 그리드 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {facilities.map((facility) => (
            <motion.div key={facility.id} variants={fadeInUp} className="card-hover overflow-hidden">
              {/* 이미지 플레이스홀더 */}
              <div className="bg-surface-light aspect-video rounded-t-card flex items-center justify-center">
                {iconMap[facility.icon]}
              </div>

              {/* 텍스트 */}
              <div className="p-6">
                <h3 className="text-heading-sm text-foreground">{facility.name}</h3>
                <p className="text-label-sm text-text-muted uppercase tracking-widest mt-0.5 mb-3">
                  {facility.nameEn}
                </p>
                <p className="text-body-sm text-text-secondary">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

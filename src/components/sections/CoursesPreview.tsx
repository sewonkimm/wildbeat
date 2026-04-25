'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mic, Guitar, Drum, Music2, Music } from 'lucide-react';
import { courses } from '@/data/courses';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic className="w-6 h-6" />,
  Guitar: <Guitar className="w-6 h-6" />,
  Drum: <Drum className="w-6 h-6" />,
  Piano: <Music2 className="w-6 h-6" />,
  Music2: <Music2 className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
};

export function CoursesPreview() {
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
            커리큘럼
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            전공별 맞춤 교육으로
            <br />
            당신의 음악을 완성합니다
          </motion.h2>
        </motion.div>

        {/* 과정 카드 그리드 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
             
            >
              <Link href="/courses" className="card-hover p-6 flex flex-col gap-4 h-full block">
                {/* 아이콘 */}
                <div className="w-12 h-12 rounded-card bg-primary/10 flex items-center justify-center text-primary">
                  {iconMap[course.icon] ?? <Music className="w-6 h-6" />}
                </div>

                {/* 텍스트 */}
                <div className="flex-1">
                  <h3 className="text-heading-md text-foreground">{course.name}</h3>
                  <p className="text-label-sm text-text-muted uppercase tracking-widest mt-0.5">
                    {course.nameEn}
                  </p>
                  <p className="text-body-sm text-text-secondary mt-3 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* 링크 힌트 */}
                <p className="text-body-sm text-primary font-medium">자세히 보기 →</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 하단 CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" href="/courses">
            전체 커리큘럼 보기
          </Button>
        </div>
      </div>
    </section>
  );
}

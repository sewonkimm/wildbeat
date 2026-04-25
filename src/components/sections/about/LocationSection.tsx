'use client';

import { motion } from 'framer-motion';
import { MapPin, Train, Bus, ParkingCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

export function LocationSection() {
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
            오시는 길
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title text-balance">
            찾아오시는 방법
          </motion.h2>
        </motion.div>

        {/* 지도 + 정보 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* 지도 플레이스홀더 */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 bg-surface-light rounded-card aspect-video flex flex-col items-center justify-center gap-3"
          >
            <MapPin className="w-10 h-10 text-primary" />
            <p className="text-body-md text-text-muted">지도 준비 중</p>
          </motion.div>

          {/* 교통 정보 */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 card-base p-6 flex flex-col gap-6">
            {/* 주소 */}
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-label-md text-foreground font-semibold mb-1">주소</p>
                <p className="text-body-sm text-text-secondary">
                  서울특별시 OO구 OO로 OOO
                  <br />
                  OO빌딩 O층
                </p>
              </div>
            </div>

            <div className="divider" />

            {/* 지하철 */}
            <div className="flex gap-3 items-start">
              <Train className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-label-md text-foreground font-semibold mb-1">지하철</p>
                <p className="text-body-sm text-text-secondary">
                  OO호선 OO역 O번 출구에서 도보 5분
                </p>
              </div>
            </div>

            {/* 버스 */}
            <div className="flex gap-3 items-start">
              <Bus className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-label-md text-foreground font-semibold mb-1">버스</p>
                <p className="text-body-sm text-text-secondary">
                  OOO번, OOO번 버스 OO정류장 하차
                </p>
              </div>
            </div>

            {/* 주차 */}
            <div className="flex gap-3 items-start">
              <ParkingCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-label-md text-foreground font-semibold mb-1">주차</p>
                <p className="text-body-sm text-text-secondary">
                  건물 내 주차 가능 (2시간 무료)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

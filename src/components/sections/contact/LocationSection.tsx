'use client';

import { motion } from 'framer-motion';
import { MapPin, Train, Car } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';
import { contactInfo } from '@/data/contact';

export function LocationSection() {
  return (
    <section className="bg-surface section-padding">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="section-label text-center">
            오시는 길
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-surface-light rounded-card aspect-[16/7] w-full flex flex-col items-center justify-center mt-8 gap-3"
          >
            <MapPin className="w-10 h-10 text-text-muted" />
            <p className="text-body-md text-text-muted">지도 준비 중</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
          >
            <div className="card-base p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-label-sm text-text-muted uppercase tracking-wide">주소</p>
              </div>
              <p className="text-body-sm text-text-secondary">{contactInfo.address}</p>
            </div>

            <div className="card-base p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-label-sm text-text-muted uppercase tracking-wide">대중교통</p>
              </div>
              <p className="text-body-sm text-text-secondary">{contactInfo.transport.subway}</p>
              <p className="text-body-sm text-text-secondary">{contactInfo.transport.bus}</p>
            </div>

            <div className="card-base p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-label-sm text-text-muted uppercase tracking-wide">주차</p>
              </div>
              <p className="text-body-sm text-text-secondary">{contactInfo.transport.parking}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

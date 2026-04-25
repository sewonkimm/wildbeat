'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-section-surface pt-20 md:pt-24">
      <div className="container-base">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center flex flex-col items-center gap-3"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-display-lg font-display uppercase text-foreground text-balance"
          >
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-body-lg text-text-muted">
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

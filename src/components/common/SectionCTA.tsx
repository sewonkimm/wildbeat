'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';

interface SectionCTAProps {
  title: string;
  buttonText: string;
  buttonHref?: string;
}

export function SectionCTA({ title, buttonText, buttonHref = '/contact' }: SectionCTAProps) {
  return (
    <section className="bg-gold-subtle section-padding-sm">
      <div className="container-base">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center flex flex-col items-center gap-6"
        >
          <motion.h2 variants={fadeInUp} className="text-heading-xl text-foreground text-balance">
            {title}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Button variant="primaryLg" href={buttonHref} showArrow>
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

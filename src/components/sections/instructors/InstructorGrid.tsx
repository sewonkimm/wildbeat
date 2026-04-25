'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/motion';
import type { Instructor } from '@/data/instructors';

interface InstructorGridProps {
  instructors: Instructor[];
  onSelect: (instructor: Instructor) => void;
}

export function InstructorGrid({ instructors, onSelect }: InstructorGridProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {instructors.map((instructor) => (
        <motion.button
          key={instructor.id}
          variants={fadeInUp}
          className="card-hover cursor-pointer text-left w-full"
          onClick={() => onSelect(instructor)}
          type="button"
          aria-label={`${instructor.name} 강사 프로필 보기`}
        >
          <div className="aspect-square bg-surface-light rounded-t-card flex items-center justify-center">
            <User className="w-16 h-16 text-text-muted" />
          </div>
          <div className="p-6">
            <h3 className="text-heading-sm text-foreground">{instructor.name}</h3>
            <p className="text-body-sm text-primary mt-1">{instructor.role}</p>
            <p className="text-body-sm text-text-muted mt-0.5">{instructor.experience}</p>
            <p className="text-body-sm text-text-secondary italic mt-3 line-clamp-2">
              &ldquo;{instructor.quote}&rdquo;
            </p>
            <p className="text-body-sm text-primary mt-3 hover:underline">프로필 보기</p>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

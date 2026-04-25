'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Quote } from 'lucide-react';
import { Button } from '@/components/common/Button';
import type { Instructor } from '@/data/instructors';

interface InstructorModalProps {
  instructor: Instructor | null;
  onClose: () => void;
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export function InstructorModal({ instructor, onClose }: InstructorModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (instructor) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [instructor, onClose]);

  return (
    <AnimatePresence>
      {instructor && (
        <div
          className="fixed inset-0 z-modal bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-surface-elevated rounded-modal max-w-2xl w-full mx-auto overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-icon absolute top-4 right-4 z-10"
              onClick={onClose}
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="aspect-square max-w-[200px] bg-surface-light rounded-card mx-auto flex items-center justify-center mb-6">
                <User className="w-16 h-16 text-text-muted" />
              </div>

              <h2 className="text-heading-lg text-foreground text-center">{instructor.name}</h2>
              <p className="text-primary text-center mt-1">{instructor.role}</p>
              <p className="text-body-sm text-text-muted text-center mt-0.5">
                {instructor.specialtyEn} · {instructor.experience}
              </p>

              <hr className="border-border my-6" />

              <div className="mb-6">
                <h3 className="text-heading-xs text-foreground mb-3">학력</h3>
                <ul className="space-y-2">
                  {instructor.education.map((item, i) => (
                    <li key={i} className="text-body-sm text-text-secondary flex gap-2">
                      <span className="text-primary mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-heading-xs text-foreground mb-3">주요 경력</h3>
                <ul className="space-y-2">
                  {instructor.career.map((item, i) => (
                    <li key={i} className="text-body-sm text-text-secondary flex gap-2">
                      <span className="text-primary mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-base p-6 mb-6">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="text-body-md text-text-secondary italic">{instructor.quote}</p>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="primaryLg"
                  href={`/contact?instructor=${encodeURIComponent(instructor.name)}`}
                  showArrow
                >
                  이 강사와 상담하기
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

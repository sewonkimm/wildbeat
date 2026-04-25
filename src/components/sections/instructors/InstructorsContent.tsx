'use client';

import { useState } from 'react';
import { InstructorFilter } from './InstructorFilter';
import { InstructorGrid } from './InstructorGrid';
import { InstructorModal } from './InstructorModal';
import { instructors, type Instructor } from '@/data/instructors';

export function InstructorsContent() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  const filtered =
    activeFilter === '전체'
      ? instructors
      : instructors.filter((i) => i.specialty === activeFilter);

  return (
    <section className="bg-background section-padding">
      <div className="container-base">
        <InstructorFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="mt-6">
          <InstructorGrid instructors={filtered} onSelect={setSelectedInstructor} />
        </div>
      </div>
      <InstructorModal
        instructor={selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </section>
  );
}

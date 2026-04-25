'use client';

const FILTER_TABS = ['전체', '보컬', '기타', '드럼', '건반', '작곡/미디'];

interface InstructorFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function InstructorFilter({ activeFilter, onFilterChange }: InstructorFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
      {FILTER_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onFilterChange(tab)}
          className={
            activeFilter === tab
              ? 'bg-primary text-text-inverse rounded-button px-4 py-2 text-body-sm font-medium whitespace-nowrap transition-colors'
              : 'bg-surface text-text-secondary rounded-button px-4 py-2 text-body-sm font-medium whitespace-nowrap transition-colors hover:bg-surface-light'
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

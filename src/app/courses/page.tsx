import { PageHero } from '@/components/common/PageHero';
import { CurriculumSection } from '@/components/sections/courses/CurriculumSection';
import { CourseTypeSection } from '@/components/sections/courses/CourseTypeSection';
import { PricingCTA } from '@/components/sections/courses/PricingCTA';
import { ScheduleSection } from '@/components/sections/courses/ScheduleSection';
import { SectionCTA } from '@/components/common/SectionCTA';

export const metadata = {
  title: '수강 안내 | 와일드 비트 실용 음악 학원',
  description:
    '보컬, 기타, 드럼, 건반, 작곡/미디 전공별 커리큘럼과 입시반, 취미반, 전문반 과정을 안내합니다.',
  openGraph: {
    title: '수강 안내 | 와일드 비트 실용 음악 학원',
    description:
      '보컬, 기타, 드럼, 건반, 작곡/미디 전공별 커리큘럼과 입시반, 취미반, 전문반 과정을 안내합니다.',
  },
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero title="수강 안내" subtitle="Courses & Curriculum" />
      <CurriculumSection />
      <CourseTypeSection />
      <PricingCTA />
      <ScheduleSection />
      <SectionCTA
        title="나에게 맞는 수업이 궁금하다면"
        buttonText="무료 상담 예약하기"
      />
    </main>
  );
}

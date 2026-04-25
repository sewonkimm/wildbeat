import { PageHero } from '@/components/common/PageHero';
import { PhilosophySection } from '@/components/sections/about/PhilosophySection';
import { HistoryTimeline } from '@/components/sections/about/HistoryTimeline';
import { FacilityGallery } from '@/components/sections/about/FacilityGallery';
import { LocationSection } from '@/components/sections/about/LocationSection';
import { SectionCTA } from '@/components/common/SectionCTA';

export const metadata = {
  title: '학원 소개 | 와일드 비트 실용 음악 학원',
  description:
    '와일드 비트 실용 음악 학원의 교육 철학, 연혁, 시설, 오시는 길을 안내합니다.',
  openGraph: {
    title: '학원 소개 | 와일드 비트 실용 음악 학원',
    description:
      '와일드 비트 실용 음악 학원의 교육 철학, 연혁, 시설, 오시는 길을 안내합니다.',
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="학원 소개" subtitle="About Wild Beat Music Academy" />
      <PhilosophySection />
      <HistoryTimeline />
      <FacilityGallery />
      <LocationSection />
      <SectionCTA
        title="와일드 비트와 함께 음악의 여정을 시작하세요"
        buttonText="상담 문의하기"
      />
    </main>
  );
}

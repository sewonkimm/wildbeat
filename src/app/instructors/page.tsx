import { PageHero } from '@/components/common/PageHero';
import { InstructorsContent } from '@/components/sections/instructors/InstructorsContent';
import { SectionCTA } from '@/components/common/SectionCTA';

export const metadata = {
  title: '강사 소개 | 와일드 비트 실용 음악 학원',
  description:
    '와일드 비트 실용 음악 학원의 전문 강사진을 소개합니다. 보컬, 기타, 드럼, 건반, 작곡/미디 전공 강사와 함께 당신의 음악 여정을 시작하세요.',
  openGraph: {
    title: '강사 소개 | 와일드 비트 실용 음악 학원',
    description:
      '와일드 비트 실용 음악 학원의 전문 강사진을 소개합니다.',
  },
};

export default function InstructorsPage() {
  return (
    <main>
      <PageHero title="강사 소개" subtitle="Our Instructors" />
      <InstructorsContent />
      <SectionCTA
        title="원하는 강사와 함께 음악을 시작하세요"
        buttonText="원하는 강사와 상담하기"
      />
    </main>
  );
}

import { PageHero } from '@/components/common/PageHero';
import { ContactSection } from '@/components/sections/contact/ContactSection';
import { LocationSection } from '@/components/sections/contact/LocationSection';
import { FAQSection } from '@/components/sections/contact/FAQSection';

export const metadata = {
  title: '상담 문의 | 와일드 비트 실용 음악 학원',
  description:
    '와일드 비트 실용 음악 학원에 무료 상담을 신청하세요. 전화, 카카오톡, 이메일로도 문의하실 수 있습니다.',
  openGraph: {
    title: '상담 문의 | 와일드 비트 실용 음악 학원',
    description:
      '와일드 비트 실용 음악 학원에 무료 상담을 신청하세요. 전화, 카카오톡, 이메일로도 문의하실 수 있습니다.',
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="상담 문의" subtitle="Contact Us" />
      <ContactSection />
      <LocationSection />
      <FAQSection />
    </main>
  );
}

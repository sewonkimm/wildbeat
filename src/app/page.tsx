import { HeroSection } from '@/components/sections/HeroSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { CoursesPreview } from '@/components/sections/CoursesPreview';
import { InstructorsPreview } from '@/components/sections/InstructorsPreview';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTABanner } from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <CoursesPreview />
      <InstructorsPreview />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}

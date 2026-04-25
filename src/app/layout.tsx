import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Wild Beat Music Academy | 와일드 비트 실용 음악 학원',
  description:
    '와일드 비트 실용 음악 학원 - 보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육',
  openGraph: {
    siteName: 'Wild Beat Music Academy',
    locale: 'ko_KR',
    type: 'website',
    title: 'Wild Beat Music Academy | 와일드 비트 실용 음악 학원',
    description:
      '와일드 비트 실용 음악 학원 - 보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Beat Music Academy | 와일드 비트 실용 음악 학원',
    description:
      '와일드 비트 실용 음악 학원 - 보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-tooltip focus:btn-primary"
        >
          본문 바로가기
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

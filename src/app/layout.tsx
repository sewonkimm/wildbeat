import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wild Beat Music Academy | 와일드 비트 실용 음악 학원',
  description:
    '와일드 비트 실용 음악 학원 - 보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}

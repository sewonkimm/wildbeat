import Link from 'next/link';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/about', label: '학원 소개' },
  { href: '/courses', label: '수강 안내' },
  { href: '/instructors', label: '강사 소개' },
  { href: '/contact', label: '상담 문의' },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-base py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* 좌: 로고 + 소개 */}
          <div>
            <p className="font-display text-xl text-primary tracking-widest uppercase mb-3">
              Wild Beat
            </p>
            <p className="text-body-sm text-text-secondary leading-relaxed">
              와일드 비트 실용 음악 학원 — 보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육
            </p>
          </div>

          {/* 중: 네비게이션 */}
          <div>
            <p className="text-label-md text-text-muted uppercase tracking-widest mb-4">
              메뉴
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 우: 연락처 */}
          <div>
            <p className="text-label-md text-text-muted uppercase tracking-widest mb-4">
              연락처
            </p>
            <ul className="space-y-2">
              <li className="text-body-sm text-text-secondary">
                전화:{' '}
                <a href="tel:02-000-0000" className="hover:text-primary transition-colors duration-200">
                  02-000-0000
                </a>
              </li>
              <li className="text-body-sm text-text-secondary">
                이메일:{' '}
                <a href="mailto:info@wildbeat.kr" className="hover:text-primary transition-colors duration-200">
                  info@wildbeat.kr
                </a>
              </li>
              <li className="text-body-sm text-text-secondary">
                카카오톡: @와일드비트
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mt-10 mb-6" />

        <p className="text-body-xs text-text-muted text-center">
          © 2024 Wild Beat Music Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

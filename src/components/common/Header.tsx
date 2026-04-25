'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/about', label: '학원 소개' },
  { href: '/courses', label: '수강 안내' },
  { href: '/instructors', label: '강사 소개' },
  { href: '/contact', label: '상담 문의' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-sticky transition-all duration-350 ease-out ${
        scrolled ? 'bg-glass border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-base">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <Link href="/" className="font-display text-xl md:text-2xl text-primary tracking-widest uppercase">
            Wild Beat
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label-md text-text-secondary hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 데스크톱 CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              상담 신청
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="btn-icon md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 모바일 풀스크린 오버레이 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-overlay bg-background flex flex-col md:hidden">
          <div className="container-base flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-display text-xl text-primary tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Wild Beat
            </Link>
            <button
              className="btn-icon"
              onClick={() => setMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-heading-md text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary-lg mt-4"
              onClick={() => setMenuOpen(false)}
            >
              상담 신청
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

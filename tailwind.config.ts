import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // breakpoints: 모바일 퍼스트 기준
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      // ─────────────────────────────────────────
      // 컬러 토큰
      // ─────────────────────────────────────────
      colors: {
        // 배경 레이어
        background: '#0A0A0F',
        foreground: '#EDEDED',

        // 표면 레이어 (카드, 섹션 배경)
        surface: {
          DEFAULT: '#111118',
          light: '#1A1A24',
          elevated: '#21212E',
        },

        // 프라이머리: 골드/앰버 — 학원 아이덴티티 핵심 컬러
        primary: {
          DEFAULT: '#D4A843',
          light: '#E4C06A',
          dark: '#B8912E',
          muted: '#D4A84333', // 10% opacity — 배경 틴트용
        },

        // 악센트: 딥 퍼플 — 강조, 배지, 그라디언트
        accent: {
          DEFAULT: '#7B5EA7',
          light: '#9B7EC8',
          dark: '#5A3F85',
          muted: '#7B5EA720', // 12% opacity
        },

        // 텍스트 계층
        text: {
          primary: '#EDEDED',
          secondary: '#B8BCC8',
          muted: '#6B7280',
          disabled: '#3F4451',
          inverse: '#0A0A0F',
        },

        // 보더
        border: {
          DEFAULT: '#1E1E2A',
          light: '#2A2A38',
          focus: '#D4A843',
        },

        // 뮤트 (회색 톤)
        muted: '#9CA3AF',

        // 시맨틱 컬러
        success: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#15803D',
          muted: '#22C55E1A',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#B91C1C',
          muted: '#EF44441A',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
          muted: '#F59E0B1A',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
          muted: '#3B82F61A',
        },
      },

      // ─────────────────────────────────────────
      // 타이포그래피 스케일
      // ─────────────────────────────────────────
      fontFamily: {
        pretendard: ['Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', 'sans-serif'],
        // 영문 디스플레이 헤드라인용 — Bebas Neue 스타일
        display: ['var(--font-display)', 'Impact', 'Arial Narrow', 'sans-serif'],
      },
      fontSize: {
        // 디스플레이 (히어로 전용)
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', fontWeight: '900', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.015em' }],

        // 헤딩
        'heading-xl': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.5rem, 2.8vw, 2.25rem)', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-md': ['clamp(1.25rem, 2.2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.005em' }],
        'heading-sm': ['clamp(1.125rem, 1.8vw, 1.375rem)', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '0' }],
        'heading-xs': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0' }],

        // 본문
        'body-xl': ['1.25rem', { lineHeight: '1.8', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }],

        // UI 레이블
        'label-lg': ['0.875rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.08em' }],
        'label-md': ['0.8125rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.06em' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.08em' }],

        // 캡션
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.02em' }],
      },

      // ─────────────────────────────────────────
      // 간격 시스템
      // ─────────────────────────────────────────
      spacing: {
        // 섹션 패딩 (py-section-*)
        'section-sm': '4rem',    // 64px — 좁은 섹션
        'section-md': '6rem',    // 96px — 기본 섹션
        'section-lg': '8rem',    // 128px — 넓은 섹션
        'section-xl': '10rem',   // 160px — 히어로

        // 컨테이너 내부 가로 패딩
        'container-x': '1.5rem', // 24px (모바일)

        // 컴포넌트 간격
        'gap-card': '1.5rem',    // 24px — 카드 그리드 갭
        'gap-section': '3rem',   // 48px — 섹션 내부 항목 간 간격
      },

      // ─────────────────────────────────────────
      // 레이아웃
      // ─────────────────────────────────────────
      maxWidth: {
        container: '80rem',     // 1280px — 기본 컨테이너
        'container-sm': '64rem', // 1024px — 좁은 레이아웃 (폼, 아티클)
        'container-xs': '48rem', // 768px — 매우 좁은 레이아웃
      },

      // ─────────────────────────────────────────
      // 그림자
      // ─────────────────────────────────────────
      boxShadow: {
        'card': '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'gold': '0 0 20px 0 rgba(212, 168, 67, 0.25)',
        'gold-lg': '0 0 40px 0 rgba(212, 168, 67, 0.35)',
        'purple': '0 0 20px 0 rgba(123, 94, 167, 0.3)',
        'inner-gold': 'inset 0 1px 0 0 rgba(212, 168, 67, 0.15)',
        'elevation-1': '0 1px 3px 0 rgba(0,0,0,0.5), 0 1px 2px -1px rgba(0,0,0,0.4)',
        'elevation-2': '0 4px 12px -1px rgba(0,0,0,0.6), 0 2px 6px -2px rgba(0,0,0,0.5)',
        'elevation-3': '0 12px 32px -3px rgba(0,0,0,0.7), 0 6px 16px -4px rgba(0,0,0,0.5)',
      },

      // ─────────────────────────────────────────
      // 둥근 모서리
      // ─────────────────────────────────────────
      borderRadius: {
        'card': '0.75rem',   // 12px — 카드 기본
        'card-lg': '1rem',   // 16px — 큰 카드
        'button': '0.5rem',  // 8px — 버튼
        'badge': '9999px',   // pill — 배지
        'modal': '1.25rem',  // 20px — 모달
      },

      // ─────────────────────────────────────────
      // 배경 그라디언트 유틸리티
      // ─────────────────────────────────────────
      backgroundImage: {
        // 히어로 오버레이
        'hero-overlay': 'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,1) 100%)',
        'hero-overlay-left': 'linear-gradient(to right, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.6) 50%, transparent 100%)',

        // 섹션 배경 그라디언트
        'section-dark': 'linear-gradient(135deg, #0A0A0F 0%, #111118 100%)',
        'section-surface': 'linear-gradient(135deg, #111118 0%, #1A1A24 100%)',

        // 프라이머리(골드) 그라디언트
        'gold': 'linear-gradient(135deg, #D4A843 0%, #E4C06A 50%, #B8912E 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(212,168,67,0.15) 0%, rgba(212,168,67,0.05) 100%)',

        // 액센트(퍼플) 그라디언트
        'purple': 'linear-gradient(135deg, #7B5EA7 0%, #9B7EC8 100%)',
        'purple-subtle': 'linear-gradient(135deg, rgba(123,94,167,0.2) 0%, rgba(123,94,167,0.05) 100%)',

        // 골드 + 퍼플 복합
        'brand': 'linear-gradient(135deg, #D4A843 0%, #9B7EC8 100%)',

        // 카드 호버용 상단 라인 그라디언트
        'card-top': 'linear-gradient(to right, #D4A843, #E4C06A)',

        // 텍스트 그라디언트용
        'text-gold': 'linear-gradient(90deg, #D4A843 0%, #E4C06A 100%)',
        'text-brand': 'linear-gradient(90deg, #D4A843 0%, #9B7EC8 100%)',

        // 하단 페이드 아웃 (섹션 경계)
        'fade-to-dark': 'linear-gradient(to bottom, transparent, #0A0A0F)',
        'fade-from-dark': 'linear-gradient(to bottom, #0A0A0F, transparent)',
      },

      // ─────────────────────────────────────────
      // 애니메이션 / 트랜지션
      // ─────────────────────────────────────────
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '50': '50ms',
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 168, 67, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212, 168, 67, 0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fade-in-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },

      // ─────────────────────────────────────────
      // z-index 레이어
      // ─────────────────────────────────────────
      zIndex: {
        'behind': '-1',
        'base': '0',
        'raised': '10',
        'dropdown': '100',
        'sticky': '200',
        'overlay': '300',
        'modal': '400',
        'toast': '500',
        'tooltip': '600',
      },

      // ─────────────────────────────────────────
      // 포커스 링
      // ─────────────────────────────────────────
      ringColor: {
        DEFAULT: '#D4A843',
      },
      ringOffsetColor: {
        DEFAULT: '#0A0A0F',
      },
    },
  },
  plugins: [],
};

export default config;

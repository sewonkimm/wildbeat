# Wild Beat Music Academy — 디자인 시스템

> 버전 1.0 | 작성일 2026-04-26
> 브랜드 방향: 권위 있는 실용 음악 아카데미 — 다크 톤, 골드 포인트, 전문성과 열정의 균형

---

## 1. 컬러 팔레트

### 1-1. 배경 레이어

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| background | `#0A0A0F` | `bg-background` | 페이지 최상위 배경 |
| surface | `#111118` | `bg-surface` | 카드, 섹션 교번 배경 |
| surface-light | `#1A1A24` | `bg-surface-light` | 입력 필드, 드롭다운, 서브 카드 |
| surface-elevated | `#21212E` | `bg-surface-elevated` | 모달, 툴팁, 플로팅 요소 |

배경 레이어는 항상 뒤에서 앞으로 밝아진다. `background → surface → surface-light → surface-elevated` 순서를 지킨다.

### 1-2. 프라이머리 — 골드/앰버 (학원 아이덴티티)

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| primary | `#D4A843` | `text-primary` / `bg-primary` | CTA 버튼, 강조 텍스트, 아이콘 포인트 |
| primary-light | `#E4C06A` | `text-primary-light` | 호버 상태, 그라디언트 하이라이트 |
| primary-dark | `#B8912E` | `text-primary-dark` | 액티브 상태, 그림자 컬러 |
| primary-muted | `#D4A84333` | `bg-primary-muted` | 배지 배경, 미묘한 틴트 |

골드는 브랜드의 핵심 컬러다. 페이지당 최대 3~4개 요소에만 사용하여 희소성을 유지한다.

### 1-3. 악센트 — 딥 퍼플 (보조 강조)

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| accent | `#7B5EA7` | `text-accent` / `bg-accent` | 태그, 배지, 보조 그라디언트 |
| accent-light | `#9B7EC8` | `text-accent-light` | 호버, 하이라이트 |
| accent-dark | `#5A3F85` | `text-accent-dark` | 깊이감 표현 |
| accent-muted | `#7B5EA720` | `bg-accent-muted` | 배경 틴트, 섹션 분위기 |

퍼플은 골드를 보조하는 역할이다. 과정 카테고리 구분, 배지, 포인트 일러스트에 제한적으로 사용한다.

### 1-4. 텍스트 계층

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| text-primary | `#EDEDED` | `text-foreground` | 주요 헤딩, 핵심 본문 |
| text-secondary | `#B8BCC8` | `text-text-secondary` | 설명 텍스트, 부제목 |
| text-muted | `#6B7280` | `text-text-muted` | 메타 정보, 플레이스홀더 |
| text-disabled | `#3F4451` | `text-text-disabled` | 비활성 상태 |
| text-inverse | `#0A0A0F` | `text-text-inverse` | Primary 버튼 위 텍스트 |

### 1-5. 보더

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| border | `#1E1E2A` | `border-border` | 카드, 입력 필드 기본 테두리 |
| border-light | `#2A2A38` | `border-border-light` | 호버 상태 테두리 |
| border-focus | `#D4A843` | `border-border-focus` | 포커스 상태 (= primary) |

### 1-6. 시맨틱 컬러

| 토큰 | Hex | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| success | `#22C55E` | `text-success` | 성공 메시지, 완료 상태 |
| error | `#EF4444` | `text-error` | 폼 오류, 경고 |
| warning | `#F59E0B` | `text-warning` | 주의 메시지 |
| info | `#3B82F6` | `text-info` | 안내 메시지 |

각 시맨틱 컬러는 `-muted` 변형 (`bg-success-muted` 등)을 사용하여 배경 틴트를 표현한다.

---

## 2. 타이포그래피

### 2-1. 폰트 패밀리

| 역할 | 폰트 | Tailwind 클래스 | 로드 방법 |
|------|------|----------------|----------|
| 한국어 본문 | Pretendard Variable | `font-pretendard` (기본) | CDN @import (jsDelivr) |
| 영문 디스플레이 | Bebas Neue | `font-display` | Google Fonts @import |

**Pretendard**는 가변 폰트(Variable Font)로 로드하여 100~900 웨이트를 단일 파일로 처리한다. 한국어 글리프 최적화가 되어 있어 웹 성능과 가독성을 동시에 확보한다.

**Bebas Neue**는 영문 헤딩과 통계 수치에만 사용한다. 항상 대문자(`uppercase`)와 함께 쓴다.

### 2-2. 타이포그래피 스케일

#### 디스플레이 (히어로 전용)

| 클래스 | 크기 (clamp) | Line Height | Weight | 용도 |
|--------|-------------|-------------|--------|------|
| `text-display-2xl` | clamp(3.5rem → 7rem) | 1.0 | 900 | 히어로 메인 슬로건 |
| `text-display-xl` | clamp(2.75rem → 5rem) | 1.05 | 900 | 히어로 서브 타이틀 |
| `text-display-lg` | clamp(2rem → 3.75rem) | 1.1 | 800 | 대형 섹션 타이틀 |

디스플레이 텍스트는 `font-display` + `uppercase` + `tracking-wide`를 함께 적용한다.

#### 헤딩 (섹션/컴포넌트 타이틀)

| 클래스 | 크기 (clamp) | Line Height | Weight | 용도 |
|--------|-------------|-------------|--------|------|
| `text-heading-xl` | clamp(1.75rem → 3rem) | 1.2 | 700 | 페이지 섹션 타이틀 (h2) |
| `text-heading-lg` | clamp(1.5rem → 2.25rem) | 1.25 | 700 | 서브 섹션 타이틀 (h3) |
| `text-heading-md` | clamp(1.25rem → 1.75rem) | 1.3 | 600 | 카드 타이틀 (h3, h4) |
| `text-heading-sm` | clamp(1.125rem → 1.375rem) | 1.35 | 600 | 소형 카드, 사이드바 타이틀 |
| `text-heading-xs` | clamp(1rem → 1.125rem) | 1.4 | 600 | 메타 타이틀, 배지 상위 |

#### 본문 (Body)

| 클래스 | 크기 | Line Height | Weight | 용도 |
|--------|------|-------------|--------|------|
| `text-body-xl` | 1.25rem (20px) | 1.8 | 400 | 리드 문단, 히어로 서브텍스트 |
| `text-body-lg` | 1.125rem (18px) | 1.75 | 400 | 섹션 설명, 강사 소개 |
| `text-body-md` | 1rem (16px) | 1.75 | 400 | 일반 본문 (기본값) |
| `text-body-sm` | 0.875rem (14px) | 1.7 | 400 | 부가 설명, 캡션 |
| `text-body-xs` | 0.75rem (12px) | 1.6 | 400 | 매우 작은 설명 |

#### 레이블 (UI 요소)

| 클래스 | 크기 | Line Height | Weight | Letter Spacing | 용도 |
|--------|------|-------------|--------|----------------|------|
| `text-label-lg` | 0.875rem (14px) | 1.4 | 600 | +0.08em | 버튼 텍스트, 섹션 레이블 |
| `text-label-md` | 0.8125rem (13px) | 1.4 | 600 | +0.06em | 네비게이션, 탭 |
| `text-label-sm` | 0.75rem (12px) | 1.4 | 500 | +0.08em | 배지, 태그 |
| `caption` | 0.75rem (12px) | 1.5 | 400 | +0.02em | 이미지 캡션, 메타 |

### 2-3. 사용 예시

```tsx
// 히어로 슬로건
<h1 className="font-display text-display-xl text-foreground uppercase">
  당신의 음악, 여기서 시작됩니다
</h1>

// 섹션 타이틀 패턴
<p className="section-label">커리큘럼</p>
<h2 className="section-title mt-2">전공별 수업 안내</h2>
<p className="section-desc mt-4 max-w-2xl">...</p>

// 텍스트 그라디언트
<span className="text-gradient-gold">Wild Beat</span>
```

---

## 3. 간격 시스템

### 3-1. 섹션 패딩

| 클래스 | 값 | 용도 |
|--------|-----|------|
| `.section-padding-sm` | py-12 / md:py-16 / lg:py-20 | 좁은 배너, CTA 섹션 |
| `.section-padding` | py-16 / md:py-24 / lg:py-32 | 기본 콘텐츠 섹션 |
| `.section-padding-lg` | py-20 / md:py-32 / lg:py-40 | 히어로, 대형 피처 섹션 |

### 3-2. 컴포넌트 내부 간격

| 용도 | 값 | Tailwind 클래스 |
|------|----|----------------|
| 카드 내부 패딩 (기본) | 24px | `p-6` |
| 카드 내부 패딩 (큰) | 32px | `p-8` |
| 카드 그리드 갭 | 24px | `gap-6` |
| 섹션 내 항목 간 수직 간격 | 48px | `space-y-12` / `gap-12` |
| 인라인 요소 간격 | 8~12px | `gap-2` / `gap-3` |

### 3-3. 컨테이너 가로 패딩

| Breakpoint | 패딩 |
|------------|------|
| 기본 (모바일) | px-6 (24px) |
| md (768px+) | px-8 (32px) |
| lg (1024px+) | px-10 (40px) |

---

## 4. 레이아웃

### 4-1. 컨테이너

| 클래스 | max-width | 용도 |
|--------|-----------|------|
| `.container-base` | 80rem (1280px) | 기본 페이지 콘텐츠 |
| `.container-sm` | 64rem (1024px) | 폼, 아티클, 단열 레이아웃 |
| `max-w-container-xs` | 48rem (768px) | 좁은 모달 내용 |

모든 컨테이너는 `mx-auto`로 중앙 정렬한다. 풀폭 섹션(`w-full`) 안에 컨테이너를 중첩하는 구조를 따른다.

### 4-2. 그리드 패턴

```tsx
// 커리큘럼 카드 (6개)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 강사 카드 (3~4개)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// 통계 카드 (4개)
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

// 2열 콘텐츠 (텍스트 + 이미지)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
```

### 4-3. Breakpoints

| 이름 | 최소 너비 | 적용 대상 |
|------|----------|----------|
| (기본) | 0px | 모바일 (320px~) |
| `sm` | 640px | 큰 모바일, 세로 태블릿 |
| `md` | 768px | 가로 태블릿 |
| `lg` | 1024px | 작은 데스크탑 |
| `xl` | 1280px | 기본 데스크탑 |
| `2xl` | 1536px | 넓은 모니터 |

---

## 5. 그림자, 테두리, 둥근 모서리

### 5-1. 그림자

| 토큰 | 값 | 용도 |
|------|-----|------|
| `shadow-card` | `0 2px 8px rgba(0,0,0,0.4)` | 카드 기본 |
| `shadow-card-hover` | `0 8px 32px rgba(0,0,0,0.6)` | 카드 호버 |
| `shadow-gold` | `0 0 20px rgba(212,168,67,0.25)` | 골드 버튼/요소 포커스 |
| `shadow-gold-lg` | `0 0 40px rgba(212,168,67,0.35)` | 골드 강조 요소 |
| `shadow-purple` | `0 0 20px rgba(123,94,167,0.3)` | 퍼플 강조 요소 |
| `shadow-elevation-1` | subtle | 드롭다운, 소형 팝업 |
| `shadow-elevation-2` | medium | 네비게이션, 플로팅 바 |
| `shadow-elevation-3` | strong | 모달, 다이얼로그 |

### 5-2. 테두리 스타일

- **기본**: `border border-border` — 카드, 입력 필드
- **강조**: `border border-primary/40` — 활성 카드, 선택된 항목
- **미묘**: `border border-border/50` — 구분선 역할
- 테두리 두께는 항상 `1px`. `2px`는 포커스 링에만 사용

### 5-3. 둥근 모서리

| 토큰 | 값 | Tailwind 클래스 | 용도 |
|------|-----|----------------|------|
| `rounded-button` | 8px | `rounded-button` | 버튼 |
| `rounded-card` | 12px | `rounded-card` | 기본 카드 |
| `rounded-card-lg` | 16px | `rounded-card-lg` | 큰 카드, 이미지 |
| `rounded-modal` | 20px | `rounded-modal` | 모달, 드로어 |
| `rounded-badge` | 9999px | `rounded-badge` | 배지, 태그, 아바타 |

---

## 6. 컴포넌트별 스타일 가이드

### 6-1. 버튼 (Button)

```
Primary (CTA 기본)
  배경: #D4A843 | 텍스트: #0A0A0F | 패딩: px-7 py-3.5
  호버: 배경 #E4C06A + shadow-gold | 액티브: scale 0.98

Primary Large (히어로 CTA)
  Primary + px-9 py-4 text-base

Secondary (보조 행동)
  테두리: 1px solid #D4A843 | 텍스트: #D4A843 | 배경: transparent
  호버: bg-primary + 텍스트 반전

Ghost (네비게이션, 덜 중요한 액션)
  배경: transparent | 텍스트: #B8BCC8
  호버: bg-surface-light + 텍스트 #EDEDED

Icon (아이콘만, 소셜/유틸 버튼)
  크기: 40x40px | 형태: rounded-button
  호버: bg-surface-light
```

버튼 사용 우선순위: Primary → Secondary → Ghost. 같은 행에 Primary 버튼은 1개만 배치한다.

### 6-2. 카드 (Card)

```
기본 카드 (.card-base)
  배경: #111118 | 테두리: #1E1E2A | 모서리: 12px
  그림자: shadow-card

호버 카드 (.card-hover)
  + 호버 시: border-border-light + shadow-card-hover + translateY(-4px)
  전환: duration-350 ease-out

골드 강조 카드 (.card-gold)
  + 상단 1px 라인: linear-gradient(#D4A843 → #E4C06A)
  히어로 아래 stat 카드, 강사 프로필 카드에 사용

이미지 카드 (CourseCard, InstructorCard)
  이미지 비율: 강사 1:1, 과정 16:9 또는 4:3
  이미지 위 텍스트: 하단 그라디언트 오버레이 필수
```

### 6-3. 입력 필드 (Form)

```
기본 상태
  배경: #1A1A24 | 테두리: #1E1E2A | 텍스트: #EDEDED
  패딩: px-4 py-3 | 모서리: 8px

포커스 상태
  테두리: #D4A843 | 링: 0 0 0 3px rgba(212,168,67,0.2)

오류 상태
  테두리: #EF4444 | 링: 0 0 0 3px rgba(239,68,68,0.2)
  오류 메시지: text-error text-caption mt-1.5

레이블: text-label-md text-text-secondary mb-1.5
플레이스홀더: text-text-muted
```

### 6-4. 배지 (Badge)

```
Gold (.badge-gold)
  배경: rgba(212,168,67,0.2) | 텍스트: #D4A843 | 테두리: primary/30

Purple (.badge-purple)
  배경: rgba(123,94,167,0.12) | 텍스트: #9B7EC8 | 테두리: accent/30

Surface (.badge-surface)
  배경: #21212E | 텍스트: #B8BCC8 | 테두리: #1E1E2A
```

### 6-5. 네비게이션 (Header)

```
기본 상태 (최상단)
  배경: transparent | 텍스트: #EDEDED

스크롤 시 (40px 이상)
  배경: rgba(17,17,24,0.9) + backdrop-blur(12px)
  하단 테두리: #1E1E2A
  전환: duration-400 ease-out

현재 페이지 표시
  텍스트: #D4A843 또는 하단 2px 라인 골드
  nav 링크 호버: text-foreground

모바일 메뉴 오버레이
  배경: #0A0A0F (불투명) | 풀스크린
  링크: text-heading-md | 여백: py-4 per item
```

### 6-6. PageHero (공통 페이지 상단)

```
높이: min-h-[40vh] md:min-h-[50vh]
배경: 이미지 + hero-overlay 그라디언트
정렬: 중앙 또는 좌측 정렬

구조:
  - 상단 레이블: section-label
  - 타이틀: text-display-lg font-display
  - 설명: text-body-lg text-text-secondary max-w-2xl
```

### 6-7. CTABanner (페이지 하단)

```
배경: bg-gold-subtle 또는 bg-surface + gold 테두리 상단
패딩: section-padding-sm
정렬: 중앙

구조:
  - 소제목: section-label
  - 타이틀: text-heading-xl
  - 부제목: text-body-lg text-text-secondary
  - 버튼: btn-primary-lg
```

---

## 7. 애니메이션 가이드라인 (Framer Motion)

### 7-1. 기본 설정값

```ts
// 페이드 인 업 (가장 많이 사용)
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

// 스태거 컨테이너 (카드 그리드)
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// 스케일 인 (모달, 팝업)
const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

// 슬라이드 인 좌 (사이드 콘텐츠)
const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

// 호버 카드
const hoverCard = {
  whileHover: { y: -4, transition: { duration: 0.25 } },
};
```

### 7-2. 스크롤 트리거 (whileInView)

```ts
// 공통 뷰포트 설정
const viewportConfig = { once: true, margin: '-80px 0px' };

// 사용 예
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={viewportConfig}
  variants={fadeInUp}
>
```

### 7-3. 모션 원칙

| 원칙 | 설명 |
|------|------|
| 목적 우선 | 애니메이션은 콘텐츠를 돕는다. 장식용 과도한 모션 금지 |
| 일관된 easing | 등장: `[0.16, 1, 0.3, 1]` (out-expo) / 퇴장: `[0.7, 0, 0.84, 0]` (in-expo) |
| 적절한 duration | 등장 0.4~0.7s / 호버 0.2~0.3s / 전환 0.3~0.5s |
| 스태거 간격 | 카드 그리드: 0.08s / 리스트 항목: 0.05s |
| 모션 감소 대응 | `prefers-reduced-motion: reduce` 미디어 쿼리 반드시 처리 |

### 7-4. 고임팩트 모션 포인트

- **페이지 최초 로드**: Hero 텍스트 순차 등장 (슬로건 → 부제목 → CTA 버튼), 0.1s 간격 스태거
- **섹션 진입**: 카드 그리드 스태거 fadeInUp, 뷰포트 기준 once: true
- **CTA 버튼**: `pulse-gold` 애니메이션으로 시선 유도 (최초 3회 후 정지)
- **통계 수치**: 뷰포트 진입 시 0 → 최종값 카운트업 (useCountUp 훅 구현)
- **이미지**: 로드 완료 시 scale(0.98) → scale(1) + opacity 0→1 전환

---

## 8. 아이콘 가이드

### 8-1. 아이콘 라이브러리

**추천: `lucide-react`** — Next.js와 트리셰이킹 완벽 호환, 일관된 선 굵기(1.5px)

```bash
pnpm add lucide-react
```

### 8-2. 크기 시스템

| 용도 | 크기 | 클래스 |
|------|------|--------|
| 인라인 아이콘 (텍스트 옆) | 16px | `w-4 h-4` |
| 버튼 아이콘 | 20px | `w-5 h-5` |
| 카드 포인트 아이콘 | 24px | `w-6 h-6` |
| 섹션 피처 아이콘 | 32~40px | `w-8 h-8` ~ `w-10 h-10` |
| 히어로/배너 아이콘 | 48px+ | `w-12 h-12`+ |

### 8-3. 컬러 규칙

- **기본**: `text-text-muted` (회색)
- **강조**: `text-primary` (골드) — 중요한 기능 아이콘
- **포인트 아이콘 컨테이너**: `bg-primary-muted p-3 rounded-card` — 섹션 피처 아이콘

### 8-4. 주요 아이콘 사용처

```ts
import {
  Music,        // 음악/일반
  Mic,          // 보컬
  Guitar,       // 기타
  Drum,         // 드럼
  Piano,        // 건반
  Music2,       // 작곡/미디
  Phone,        // 전화
  Mail,         // 이메일
  MapPin,       // 위치
  Clock,        // 운영시간
  ChevronRight, // 링크, 더보기
  ChevronDown,  // 아코디언
  X,            // 닫기 (모달, 메뉴)
  Menu,         // 햄버거
  Star,         // 평점, 강조
  Award,        // 수상, 자격
  Users,        // 수강생
  CheckCircle2, // 완료, 특징
  ArrowRight,   // CTA 화살표
  Quote,        // 후기 인용
} from 'lucide-react';
```

---

## 9. 접근성 가이드라인

### 색상 대비

| 조합 | 대비율 | WCAG 등급 |
|------|--------|-----------|
| `#EDEDED` on `#0A0A0F` | 17.5:1 | AAA |
| `#EDEDED` on `#111118` | 16.1:1 | AAA |
| `#D4A843` on `#0A0A0F` | 7.2:1 | AAA |
| `#9CA3AF` on `#111118` | 4.7:1 | AA |
| `#D4A843` on `#111118` | 6.8:1 | AA (Large) |

`#0A0A0F` 배경 위 `#D4A843` 텍스트는 버튼 레이블(bold)이 아닌 소형 본문에는 사용을 피한다.

### 키보드 접근성

- 모든 인터랙티브 요소는 `focus-visible` 링 표시 (outline: 2px solid #D4A843)
- 모달 오픈 시 포커스 트랩 (Focus Trap) 구현 필수
- 아코디언, 탭: ARIA `role`, `aria-expanded`, `aria-controls` 속성 필수
- Skip Navigation 링크: 페이지 최상단에 `.sr-only` + 포커스 시 표시

---

## 10. 이미지 가이드라인

### next/image 설정

```tsx
// 히어로 배경 이미지
<Image
  src="/images/hero-bg.jpg"
  alt="와일드 비트 실용 음악 학원 내부"
  fill
  priority          // LCP 이미지는 priority 필수
  className="object-cover"
  sizes="100vw"
/>

// 강사 프로필 (1:1)
<Image
  src={instructor.image}
  alt={`${instructor.name} 강사 프로필`}
  width={400}
  height={400}
  className="object-cover rounded-card-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
/>
```

### 오버레이 규칙

- 배경 이미지 위 텍스트: 반드시 `hero-overlay` 또는 동등한 그라디언트 오버레이 적용
- 최소 WCAG AA 대비율 유지 (밝은 이미지 위 흰 텍스트는 금지)
- 강사 사진: 배경 일관성을 위해 어두운 배경 또는 그라디언트 처리 권장

### 이미지 비율

| 용도 | 비율 | 비고 |
|------|------|------|
| 강사 프로필 | 1:1 | object-cover |
| 과정 카드 썸네일 | 16:9 | object-cover |
| 시설 갤러리 | 4:3 | object-cover |
| 히어로 배경 | 풀스크린 fill | priority |
| OG 이미지 | 1200x630px | 별도 생성 |

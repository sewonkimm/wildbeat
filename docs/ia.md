# Wild Beat Music Academy - 정보 계층 구조 (Information Architecture)

## 1. 글로벌 네비게이션 구조

### 데스크탑 (Desktop Navigation)

```
[로고: Wild Beat]   홈   학원 소개   수강 안내   강사 소개   [상담 신청 →]
```

- 좌측: 로고 (클릭 시 `/`로 이동)
- 중앙/우측: 페이지 네비게이션 (4개 항목)
- 최우측: "상담 신청" CTA 버튼 (골드/앰버 컬러, 항상 노출)
- 스크롤 시 배경 불투명도 변경 (glassmorphism 또는 solid dark)
- 현재 페이지 표시: 하단 언더라인 또는 텍스트 컬러 변경

### 모바일 (Mobile Navigation)

```
[로고]                    [햄버거 ☰]
```

- 햄버거 메뉴 터치 시 풀스크린 오버레이 또는 슬라이드 패널
- 메뉴 항목: 홈, 학원 소개, 수강 안내, 강사 소개, 상담 문의
- 하단에 전화번호 + 카카오톡 상담 바로가기
- "상담 신청" CTA 버튼 별도 강조

### Footer 구조

```
[로고]
학원 소개 | 수강 안내 | 강사 소개 | 상담 문의

주소: [학원 주소]
전화: [전화번호]
이메일: [이메일]

[카카오톡] [인스타그램] [유튜브]

(c) 2026 Wild Beat Music Academy. All rights reserved.
```

---

## 2. 페이지별 콘텐츠 계층

### 2-1. 랜딩페이지 `/`

```
H1: (슬로건 — Hero 내 메인 카피)
    "당신의 음악, 여기서 시작됩니다"

  H2: 와일드 비트가 특별한 이유
    — StatCard x4 (수치 하이라이트)

  H2: 커리큘럼
    H3: 보컬 | 기타 | 드럼 | 건반 | 작곡 | 미디
    — CourseCard x6

  H2: 강사진
    H3: [강사명] — [전공]
    — InstructorCard x3~4

  H2: 수강생 후기 & 성과
    H3: [수강생명] — [성과 요약]
    — TestimonialCard

  CTA: 무료 상담 예약하기
```

### 2-2. 학원 소개 `/about`

```
H1: 학원 소개

  H2: 교육 철학
    — 학원 설립 이념, 교육 비전, 핵심 가치 3~4가지

  H2: 연혁
    H3: [연도] — [주요 사건]
    — 타임라인 형식

  H2: 시설 안내
    H3: 연습실 | 녹음실 | 공연장
    — 이미지 갤러리

  H2: 오시는 길
    — 지도 임베드 + 주소 + 교통편 안내

  CTA: 상담 문의하기
```

### 2-3. 수강 안내 `/courses`

```
H1: 수강 안내

  H2: 전공별 커리큘럼
    H3: 보컬 (Vocal)
      — 수업 내용, 단계별 커리큘럼
    H3: 기타 (Guitar)
    H3: 드럼 (Drums)
    H3: 건반 (Keyboard)
    H3: 작곡/미디 (Composition/MIDI)

  H2: 과정 안내
    H3: 입시반
      — 대상, 목표, 커리큘럼 특징
    H3: 취미반
    H3: 전문반

  H2: 수강료 안내
    — "개인 맞춤 상담을 통해 안내드립니다" + CTA

  H2: 수업 시간표 & 수강 절차
    H3: 시간표
    H3: 수강 절차 (상담 → 레벨 테스트 → 반 배정 → 수업 시작)

  CTA: 무료 상담 예약하기
```

### 2-4. 강사 소개 `/instructors`

```
H1: 강사 소개

  [필터: 전체 | 보컬 | 기타 | 드럼 | 건반 | 작곡/미디]

  H2: [강사명]
    — 사진, 전공, 경력 요약, 학력
    — 클릭 시 모달:
      H3: 프로필
      H3: 주요 경력
      H3: 강사 한마디 (인용문)

  CTA: 원하는 강사와 상담하기
```

### 2-5. 상담 문의 `/contact`

```
H1: 상담 문의

  H2: 상담 신청
    — 폼: 이름, 연락처, 관심 과정(셀렉트), 희망 시간대, 문의 내용

  H2: 연락처
    H3: 전화 | 카카오톡 | 이메일
    — 운영 시간

  H2: 오시는 길
    — 지도 임베드 + 주소

  H2: 자주 묻는 질문 (FAQ)
    H3: 수강료는 얼마인가요?
    H3: 악기가 없어도 수강할 수 있나요?
    H3: 입시 준비는 언제부터 시작하면 좋나요?
    H3: 무료 체험 수업이 있나요?
    H3: 주차가 가능한가요?
    (Accordion 형식)
```

---

## 3. CTA 배치 전략

### 원칙

1. **모든 페이지에 최소 2개의 CTA** 배치 (Header 고정 CTA + 페이지 하단 CTABanner)
2. **스크롤 깊이에 따른 CTA 노출**: 중간 지점과 하단에 배치하여 이탈 방지
3. **문맥 기반 CTA 문구**: 페이지 맥락에 맞는 행동 유도 문구 사용

### 페이지별 CTA 배치

| 페이지 | CTA 위치 | CTA 문구 | 타입 |
|--------|----------|----------|------|
| `/` | Hero (상단) | "수강 상담 신청" | Primary Button |
| `/` | 하단 배너 | "무료 상담 예약하기" | Full-width Banner |
| `/about` | 하단 배너 | "와일드 비트와 함께하기" | Full-width Banner |
| `/courses` | 수강료 섹션 | "맞춤 상담 받기" | Primary Button |
| `/courses` | 하단 배너 | "무료 상담 예약하기" | Full-width Banner |
| `/instructors` | 하단 배너 | "원하는 강사와 상담하기" | Full-width Banner |
| `/contact` | 폼 제출 | "상담 신청하기" | Submit Button |
| Header (공통) | 우측 고정 | "상담 신청" | Accent Button |

### 모바일 추가 CTA

- 하단 고정 바 (Sticky Bottom Bar): "전화 상담" + "카카오톡 상담" 2버튼
- 플로팅 버튼: 카카오톡 채널 바로가기 (우측 하단)

---

## 4. SEO 가이드

### 페이지별 title / meta description

| 페이지 | title | meta description |
|--------|-------|------------------|
| `/` | `Wild Beat Music Academy \| 와일드 비트 실용 음악 학원` | `보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육. 입시반, 취미반, 전문반 운영. 무료 상담 예약 받습니다.` |
| `/about` | `학원 소개 \| Wild Beat Music Academy` | `와일드 비트 실용 음악 학원의 교육 철학, 연혁, 시설을 소개합니다. 최고의 환경에서 음악을 배우세요.` |
| `/courses` | `수강 안내 - 커리큘럼 & 과정 \| Wild Beat Music Academy` | `보컬, 기타, 드럼, 건반, 작곡/미디 커리큘럼 안내. 입시반, 취미반, 전문반 맞춤 교육 과정을 확인하세요.` |
| `/instructors` | `강사 소개 \| Wild Beat Music Academy` | `현직 뮤지션 출신 전문 강사진을 소개합니다. 풍부한 경력과 교육 노하우를 갖춘 와일드 비트 강사진.` |
| `/contact` | `상담 문의 & 수강 신청 \| Wild Beat Music Academy` | `와일드 비트 실용 음악 학원 무료 상담 신청. 전화, 카카오톡, 온라인 폼으로 편하게 문의하세요.` |

### Open Graph 태그 가이드

모든 페이지에 공통 적용:

```
og:type        → website
og:site_name   → Wild Beat Music Academy
og:locale      → ko_KR
og:image       → /images/og-default.jpg (1200x630, 학원 대표 이미지)
```

페이지별 고유 값:

```
og:title       → 각 페이지 title과 동일
og:description → 각 페이지 meta description과 동일
og:url         → 각 페이지 canonical URL
```

### 추가 SEO 고려사항

- **Canonical URL**: 각 페이지에 canonical 태그 설정
- **구조화 데이터 (JSON-LD)**: LocalBusiness 스키마 (학원명, 주소, 전화, 운영시간)
- **robots.txt**: 크롤링 허용, `.next/` 제외
- **sitemap.xml**: Next.js 자동 생성 또는 수동 설정
- **이미지 alt 텍스트**: 모든 이미지에 한국어 설명 포함
- **시맨틱 HTML**: header, nav, main, section, article, footer 올바른 사용
- **페이지 로딩 속도**: next/image 최적화, 폰트 preload, 코드 스플리팅

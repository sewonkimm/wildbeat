# Wild Beat Music Academy (와일드 비트 실용 음악 학원)

## 프로젝트 개요
- 목적: 와일드 비트 실용 음악 학원 공식 홈페이지
- 브랜드명 (국문): 와일드 비트 실용 음악 학원
- 브랜드명 (영문): Wild Beat Music Academy
- 대상: 실용 음악을 배우려는 10대~30대, 입시 준비생, 취미 수강생, 학부모
- 톤앤매너: 오피셜하고 권위 있는 아카데미 느낌. 참고 — https://www.mi.edu/
  - 세련되고 전문적이면서도 음악의 열정이 느껴지는 분위기
  - 어둡고 무거운 배경(다크 톤) + 포인트 컬러로 에너지 표현
  - 대형 히어로 이미지, 영상 배경, 넉넉한 여백
  - 폰트는 깔끔한 산세리프 계열, 영문 헤드라인은 볼드하게

## 핵심 페이지 (5개)

### 1. 랜딩페이지 (/)
- Hero: 풀스크린 비주얼 + 학원 슬로건 + CTA("수강 상담 신청")
- 학원 하이라이트 (수치: 수강생 수, 입시 합격률, 강사진 경력 등)
- 커리큘럼 미리보기 (보컬, 기타, 드럼, 건반, 작곡, 미디 등 카드)
- 강사진 미리보기 (대표 강사 3~4명 프로필 카드)
- 수강생 후기 / 성과 (입시 합격, 공연, 수상 등)
- CTA 배너 ("무료 상담 예약하기")

### 2. 학원 소개 (/about)
- 학원 철학 · 교육 비전
- 연혁 · 수상 · 미디어 소개
- 시설 소개 (연습실, 녹음실, 공연장 등 이미지 갤러리)
- 오시는 길 (지도 임베드)

### 3. 수강 안내 (/courses)
- 전공별 커리큘럼 상세 (보컬, 기타, 드럼, 건반, 작곡/미디)
- 과정 구분: 입시반 / 취미반 / 전문반
- 수강료 안내 또는 "상담 문의" 유도
- 수업 시간표 · 수강 절차

### 4. 강사 소개 (/instructors)
- 강사별 프로필 카드 (사진, 이름, 전공, 경력, 학력)
- 클릭 시 상세 프로필 모달 또는 개별 페이지
- 강사 한마디 (짧은 인터뷰 인용)

### 5. 상담 문의 (/contact)
- 상담 신청 폼 (이름, 연락처, 관심 과정, 희망 시간, 문의 내용)
- 전화 · 카카오톡 · 이메일 연락처
- 운영 시간
- 오시는 길 (지도)
- FAQ 아코디언 (자주 묻는 질문)

## 기술 스택
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict)
- Styling: Tailwind CSS 3
- 패키지 매니저: pnpm
- 애니메이션: Framer Motion (스크롤 기반 등장 애니메이션)
- 폼: React Hook Form + Zod validation
- 지도: 카카오맵 API 또는 Google Maps embed
- 배포: Vercel
- 폰트: Pretendard(본문) + 영문 디스플레이 폰트(헤드라인)

## 코드 컨벤션
- 컴포넌트: PascalCase (.tsx), 함수형 컴포넌트만 사용
- 스타일: Tailwind utility-first, 커스텀 CSS 금지
- 폴더 구조:
  - src/app — 페이지 라우트
  - src/components/common — 공통 (Header, Footer, Button, Card)
  - src/components/sections — 페이지 섹션 (HeroSection, CourseCard 등)
  - src/components/ui — 기초 UI (Input, Modal, Accordion)
  - src/lib — 유틸리티, 상수, 타입
  - src/data — 강사 데이터, 커리큘럼 데이터 (JSON/TS)
  - public/images — 이미지 에셋
- import: 절대경로 @/ 사용
- 한 파일 200줄 이하 유지
- 한국어 콘텐츠는 src/data/ 에 분리하여 관리 (하드코딩 금지)

## 디자인 가이드라인
- 컬러:
  - 배경: 다크 계열 (#0A0A0F ~ #111118)
  - 포인트: 골드/앰버 계열 (학원 아이덴티티)
  - 텍스트: 화이트 + 그레이 톤
  - 악센트: 필요 시 딥 퍼플 또는 레드 계열
- 레이아웃:
  - 풀폭 섹션 + 내부 max-w-7xl 컨테이너
  - 섹션 간 넉넉한 패딩 (py-20 이상)
  - 모바일 퍼스트 반응형
- 타이포그래피:
  - 영문 헤드라인: 볼드, 대문자 가능
  - 한글 본문: Pretendard, 가독성 우선
  - 계층: h1 > h2 > h3 > body 명확히 구분
- 이미지:
  - next/image 필수
  - 히어로/배경은 overlay + gradient 처리
  - 강사 사진은 1:1 비율, 통일된 스타일

## 검증 명령어
- 타입체크: pnpm tsc --noEmit
- 린트: pnpm lint
- 빌드: pnpm build
- 개발서버: pnpm dev

## 에이전트 위임 규칙
- 3개 이상 파일 수정 → Explore → Plan → Execute 파이프라인
- 기획/구조 → planner 에이전트
- 디자인/스타일 → designer 에이전트
- 카피/텍스트/SEO → copywriter 에이전트
- 컴포넌트 구현 → frontend 에이전트
- 검증/리뷰 → qa-reviewer 에이전트
- 배포 → deployer 에이전트

## 콘텐츠 원칙
- 모든 텍스트는 한국어 기본, 브랜드명/과정명만 영문 병기
- 경어체 사용 (존댓말, ~합니다 체)
- 과장 없이 신뢰감 있는 톤
- SEO: 각 페이지에 title, meta description, og 태그 필수

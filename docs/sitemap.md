# Wild Beat Music Academy - 사이트맵 (Sitemap)

## 전체 사이트 구조

```
/                          랜딩페이지 (Home)
/about                     학원 소개 (About)
/courses                   수강 안내 (Courses)
/instructors               강사 소개 (Instructors)
/contact                   상담 문의 (Contact)
```

---

## 페이지별 섹션 구성

### 1. 랜딩페이지 `/`

| 순서 | 섹션명 | 주요 컴포넌트 | 설명 |
|------|--------|---------------|------|
| 1 | HeroSection | HeroBanner, CTAButton | 풀스크린 비주얼 + 슬로건 + "수강 상담 신청" CTA |
| 2 | HighlightStats | StatCard (x4) | 수강생 수, 입시 합격률, 강사 경력, 운영 연수 등 수치 |
| 3 | CurriculumPreview | CourseCard (x6) | 보컬, 기타, 드럼, 건반, 작곡, 미디 카드 그리드 |
| 4 | InstructorPreview | InstructorCard (x3~4) | 대표 강사 프로필 카드 |
| 5 | TestimonialSection | TestimonialCard, Badge | 수강생 후기, 입시 합격 성과, 공연/수상 실적 |
| 6 | CTABanner | CTABanner | "무료 상담 예약하기" 풀폭 배너 |

### 2. 학원 소개 `/about`

| 순서 | 섹션명 | 주요 컴포넌트 | 설명 |
|------|--------|---------------|------|
| 1 | AboutHero | PageHero | 페이지 타이틀 + 서브카피 |
| 2 | PhilosophySection | ContentBlock, IconCard | 학원 철학, 교육 비전, 핵심 가치 |
| 3 | HistoryTimeline | TimelineItem | 연혁, 수상, 미디어 소개 타임라인 |
| 4 | FacilityGallery | ImageGallery, GalleryModal | 연습실, 녹음실, 공연장 이미지 갤러리 |
| 5 | LocationSection | MapEmbed, AddressCard | 오시는 길 (지도 + 주소 + 교통편) |
| 6 | CTABanner | CTABanner | "상담 문의" 유도 배너 |

### 3. 수강 안내 `/courses`

| 순서 | 섹션명 | 주요 컴포넌트 | 설명 |
|------|--------|---------------|------|
| 1 | CoursesHero | PageHero | 페이지 타이틀 + 서브카피 |
| 2 | CourseFilter | FilterTab | 전공별/과정별 필터 탭 (보컬, 기타, 드럼, 건반, 작곡/미디) |
| 3 | CurriculumDetail | CurriculumCard, LessonList | 전공별 커리큘럼 상세 내용 |
| 4 | CourseTypeSection | CourseTypeCard (x3) | 입시반 / 취미반 / 전문반 과정 구분 및 설명 |
| 5 | PricingCTA | PricingCard, CTAButton | 수강료 "상담 문의" 유도 |
| 6 | ScheduleSection | Timetable, ProcessSteps | 수업 시간표 + 수강 절차 안내 |
| 7 | CTABanner | CTABanner | "무료 상담 예약하기" 배너 |

### 4. 강사 소개 `/instructors`

| 순서 | 섹션명 | 주요 컴포넌트 | 설명 |
|------|--------|---------------|------|
| 1 | InstructorsHero | PageHero | 페이지 타이틀 + 서브카피 |
| 2 | InstructorFilter | FilterTab | 전공별 필터 (전체, 보컬, 기타, 드럼, 건반, 작곡/미디) |
| 3 | InstructorGrid | InstructorCard | 강사별 프로필 카드 그리드 (사진, 이름, 전공, 경력) |
| 4 | InstructorModal | Modal, ProfileDetail | 클릭 시 상세 프로필 (학력, 경력 상세, 강사 한마디) |
| 5 | CTABanner | CTABanner | "원하는 강사와 상담하기" 배너 |

### 5. 상담 문의 `/contact`

| 순서 | 섹션명 | 주요 컴포넌트 | 설명 |
|------|--------|---------------|------|
| 1 | ContactHero | PageHero | 페이지 타이틀 + 서브카피 |
| 2 | ContactForm | Form, Input, Select, Textarea, SubmitButton | 상담 신청 폼 (이름, 연락처, 관심 과정, 희망 시간, 문의 내용) |
| 3 | ContactInfo | InfoCard (x3) | 전화, 카카오톡, 이메일 연락처 + 운영 시간 |
| 4 | LocationSection | MapEmbed, AddressCard | 오시는 길 (지도 + 주소 + 교통편) |
| 5 | FAQSection | Accordion, AccordionItem | 자주 묻는 질문 (수강료, 수업 방식, 입시 준비 등) |

---

## 공통 컴포넌트 (Global Components)

| 컴포넌트 | 위치 | 설명 |
|----------|------|------|
| Header | 모든 페이지 상단 | 로고 + 글로벌 네비게이션 + 모바일 햄버거 메뉴 + "상담 신청" CTA 버튼 |
| Footer | 모든 페이지 하단 | 로고, 네비게이션 링크, 연락처, SNS 링크, 저작권 표시 |
| MobileMenu | Header 내 | 모바일 환경 슬라이드/오버레이 메뉴 |
| ScrollToTop | 모든 페이지 | 스크롤 시 나타나는 상단 이동 버튼 |

---

## 페이지 간 내부 링크 관계도

```
Header (글로벌 네비게이션)
├── 홈 (/)
├── 학원 소개 (/about)
├── 수강 안내 (/courses)
├── 강사 소개 (/instructors)
└── 상담 문의 (/contact)  ← Header CTA 버튼

/ (랜딩페이지)
├── CurriculumPreview → /courses (전공 카드 클릭)
├── InstructorPreview → /instructors (강사 카드 클릭 또는 "전체 보기")
├── HeroSection CTA → /contact (수강 상담 신청)
├── TestimonialSection → /about (학원 성과 더보기)
└── CTABanner → /contact (무료 상담 예약하기)

/about (학원 소개)
├── LocationSection → /contact (상담 문의 링크)
└── CTABanner → /contact

/courses (수강 안내)
├── CurriculumDetail → /instructors (담당 강사 링크)
├── PricingCTA → /contact (수강료 상담)
└── CTABanner → /contact

/instructors (강사 소개)
├── InstructorCard → /courses (담당 과목 링크)
└── CTABanner → /contact

/contact (상담 문의)
├── FAQSection → /courses (수강 안내 관련 답변 링크)
└── FAQSection → /about (학원 소개 관련 답변 링크)

Footer (글로벌)
├── 모든 페이지 네비게이션 링크
├── 카카오톡 상담 (외부 링크)
└── SNS 링크 (외부)
```

### 전환 퍼널 흐름 요약

```
모든 페이지 ──→ /contact (상담 문의)
                 ↑
                 │ CTA 버튼, CTABanner, Header CTA
                 │
/ ──→ /courses ──→ /contact
/ ──→ /instructors ──→ /contact
/ ──→ /about ──→ /contact
```

모든 페이지에서 `/contact`(상담 문의)로 향하는 전환 경로가 최소 2개 이상 존재하도록 설계되었다. Header의 고정 CTA 버튼과 각 페이지 하단의 CTABanner가 상시 전환 경로 역할을 한다.

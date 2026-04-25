# SEO 메타데이터 — 5개 페이지

## 공통 설정

```json
{
  "og:site_name": "Wild Beat Music Academy",
  "og:locale": "ko_KR",
  "og:type": "website",
  "og:image": "/images/og-default.jpg (1200x630px)",
  "twitter:card": "summary_large_image",
  "canonical": "[각 페이지 URL]"
}
```

---

## Page 1: 랜딩페이지 `/`

| 항목 | 값 |
|------|-----|
| **title** | `Wild Beat Music Academy \| 와일드 비트 실용 음악 학원` |
| **meta description** | `보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육. 입시반, 취미반, 전문반 운영. 무료 상담 예약 받습니다.` |
| **og:title** | `Wild Beat Music Academy \| 와일드 비트 실용 음악 학원` |
| **og:description** | `보컬, 기타, 드럼, 건반, 작곡/미디 전문 교육. 입시반, 취미반, 전문반 운영. 무료 상담 예약 받습니다.` |
| **og:url** | `https://wildbeat.co.kr/` |
| **keywords** | `음악학원, 보컬학원, 기타레슨, 드럼학원, 음악입시, 실용음악, 서울음악학원, 음악교육` |

### JSON-LD (LocalBusiness Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wild Beat Music Academy",
  "image": "https://wildbeat.co.kr/images/logo.png",
  "description": "실용 음악 전문 교육 기관",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "서울시 강남구 OO로 OO길 OO",
    "addressLocality": "서울",
    "addressRegion": "강남구",
    "postalCode": "XXXXX",
    "addressCountry": "KR"
  },
  "telephone": "02-XXXX-XXXX",
  "url": "https://wildbeat.co.kr/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ]
}
```

---

## Page 2: 학원 소개 `/about`

| 항목 | 값 |
|------|-----|
| **title** | `학원 소개 \| Wild Beat Music Academy` |
| **meta description** | `와일드 비트 실용 음악 학원의 교육 철학, 연혁, 시설을 소개합니다. 최고의 환경에서 음악을 배우세요.` |
| **og:title** | `학원 소개 \| Wild Beat Music Academy` |
| **og:description** | `와일드 비트 실용 음악 학원의 교육 철학, 연혁, 시설을 소개합니다. 최고의 환경에서 음악을 배우세요.` |
| **og:url** | `https://wildbeat.co.kr/about` |
| **keywords** | `음악학원소개, 교육철학, 학원시설, 연습실, 녹음실, 공연장, 음악교육기관` |

### JSON-LD (Organization Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wild Beat Music Academy",
  "description": "실용 음악 전문 교육 기관",
  "url": "https://wildbeat.co.kr/",
  "logo": "https://wildbeat.co.kr/images/logo.png",
  "sameAs": [
    "https://www.instagram.com/wildbeat_academy",
    "https://www.youtube.com/@wildbeat_academy"
  ],
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "[학원장명]"
    }
  ]
}
```

---

## Page 3: 수강 안내 `/courses`

| 항목 | 값 |
|------|-----|
| **title** | `수강 안내 - 커리큘럼 & 과정 \| Wild Beat Music Academy` |
| **meta description** | `보컬, 기타, 드럼, 건반, 작곡/미디 커리큘럼 안내. 입시반, 취미반, 전문반 맞춤 교육 과정을 확인하세요.` |
| **og:title** | `수강 안내 - 커리큘럼 & 과정 \| Wild Beat Music Academy` |
| **og:description** | `보컬, 기타, 드럼, 건반, 작곡/미디 커리큘럼 안내. 입시반, 취미반, 전문반 맞춤 교육 과정을 확인하세요.` |
| **og:url** | `https://wildbeat.co.kr/courses` |
| **keywords** | `음악커리큘럼, 보컬레슨, 기타레슨, 드럼레슨, 건반레슨, 음악입시, 취미음악, 음악교육과정` |

### JSON-LD (Course Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "와일드 비트 음악 커리큘럼",
  "description": "보컬, 기타, 드럼, 건반, 작곡/미디 실용 음악 교육",
  "provider": {
    "@type": "Organization",
    "name": "Wild Beat Music Academy",
    "url": "https://wildbeat.co.kr/"
  },
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "name": "입시반",
      "description": "음악대학 입시 준비 과정",
      "duration": "P6M"
    },
    {
      "@type": "CourseInstance",
      "name": "취미반",
      "description": "초보자 및 취미 수강생을 위한 과정"
    },
    {
      "@type": "CourseInstance",
      "name": "전문반",
      "description": "현직 뮤지션 및 음악 산업 진입 과정"
    }
  ]
}
```

---

## Page 4: 강사 소개 `/instructors`

| 항목 | 값 |
|------|-----|
| **title** | `강사 소개 \| Wild Beat Music Academy` |
| **meta description** | `현직 뮤지션 출신 전문 강사진을 소개합니다. 풍부한 경력과 교육 노하우를 갖춘 와일드 비트 강사진.` |
| **og:title** | `강사 소개 \| Wild Beat Music Academy` |
| **og:description** | `현직 뮤지션 출신 전문 강사진을 소개합니다. 풍부한 경력과 교육 노하우를 갖춘 와일드 비트 강사진.` |
| **og:url** | `https://wildbeat.co.kr/instructors` |
| **keywords** | `음악강사, 성악강사, 기타강사, 드럼강사, 음악선생님, 음악교육전문가, 현직뮤지션` |

### JSON-LD (Person Schema - 예시)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "김민지",
  "jobTitle": "성악 강사",
  "description": "서울대학교 음악대학 성악과 졸업, 음악대학 입시 전문가",
  "affiliation": {
    "@type": "Organization",
    "name": "Wild Beat Music Academy"
  },
  "url": "https://wildbeat.co.kr/instructors"
}
```

---

## Page 5: 상담 문의 `/contact`

| 항목 | 값 |
|------|-----|
| **title** | `상담 문의 & 수강 신청 \| Wild Beat Music Academy` |
| **meta description** | `와일드 비트 실용 음악 학원 무료 상담 신청. 전화, 카카오톡, 온라인 폼으로 편하게 문의하세요.` |
| **og:title** | `상담 문의 & 수강 신청 \| Wild Beat Music Academy` |
| **og:description** | `와일드 비트 실용 음악 학원 무료 상담 신청. 전화, 카카오톡, 온라인 폼으로 편하게 문의하세요.` |
| **og:url** | `https://wildbeat.co.kr/contact` |
| **keywords** | `음악학원상담, 음악레슨문의, 입시준비상담, 음악수강신청, 음악학원등록, 상담신청` |

### JSON-LD (ContactPoint Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "contactType": "Customer Support",
  "telephone": "02-XXXX-XXXX",
  "email": "info@wildbeat.co.kr",
  "areaServed": "KR",
  "availableLanguage": "ko",
  "hoursAvailable": "Mo-Fr 10:00-22:00, Sa 10:00-18:00"
}
```

---

## 이미지 최적화

### Open Graph 이미지
- **파일명**: `og-default.jpg`
- **크기**: 1200x630px
- **위치**: `/public/images/og-default.jpg`
- **콘텐츠**: 학원 대표 이미지 (로고 포함, 프로 사진)

### 페이지별 추가 og:image (선택사항)
- **랜딩페이지**: 히어로 배경 이미지
- **학원 소개**: 시설 갤러리 사진
- **수강 안내**: 커리큘럼 하이라이트
- **강사 소개**: 강사진 단체 사진
- **상담 문의**: 학원 로비 또는 상담실 사진

---

## 구조화 데이터 추가 권장사항

### 페이지 전체에 적용
- **BreadcrumbList**: 네비게이션 경로 (검색 결과 Rich Snippet)
- **FAQPage**: 상담 문의 페이지의 FAQ 섹션

### 예시: BreadcrumbList (모든 서브 페이지)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "홈",
      "item": "https://wildbeat.co.kr/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "학원 소개",
      "item": "https://wildbeat.co.kr/about"
    }
  ]
}
```

---

## 추가 SEO 체크리스트

- [ ] Canonical URL 설정 (각 페이지에 self-referential canonical)
- [ ] robots.txt 설정 (크롤링 허용, `.next/` 제외)
- [ ] sitemap.xml 생성 (Next.js 자동 생성 또는 수동)
- [ ] 모든 이미지에 alt 텍스트 추가 (한국어 설명)
- [ ] 페이지 로딩 속도 최적화 (next/image, 폰트 preload)
- [ ] 모바일 반응형 검증 (viewpoint meta tag)
- [ ] 언어 설정 (html lang="ko")
- [ ] 테스트 도구:
  - Google Search Console 등록
  - Google PageSpeed Insights 검증
  - Lighthouse 성능 점수 80점 이상 목표
  - Schema.org 검증 도구로 JSON-LD 확인

export interface CurriculumItem {
  id: string;
  name: string;
  nameEn: string;
  intro: string;
  topics: string[];
}

export const curriculumDetails: CurriculumItem[] = [
  {
    id: 'vocal',
    name: '보컬',
    nameEn: 'Vocal',
    intro:
      '노래를 통해 자신만의 음악적 정체성을 찾아가는 과정입니다. 발성 기초부터 무대 표현까지, 완성된 보컬리스트가 되기 위한 모든 것을 배웁니다.',
    topics: [
      '발성 · 호흡 기초',
      '음정 · 리듬 트레이닝',
      '곡 해석 · 감정 표현',
      '무대 퍼포먼스',
      '오디션 · 입시 실전 대비',
    ],
  },
  {
    id: 'guitar',
    name: '기타',
    nameEn: 'Guitar',
    intro:
      '어쿠스틱 기타부터 일렉트릭 기타까지, 손가락으로 표현하는 음악의 감정을 배웁니다.',
    topics: [
      '기초 주법 및 음감 훈련',
      '코드와 핑거링',
      '장르별 기타 스타일',
      '뮤직 이론과의 연결',
      '밴드 활동 및 공연 준비',
    ],
  },
  {
    id: 'drums',
    name: '드럼',
    nameEn: 'Drums',
    intro:
      '리듬의 심장이 되는 드럼. 정확한 비트감과 강렬한 무대 표현력을 한 번에 습득합니다.',
    topics: [
      '기본 그립과 스틱 컨트롤',
      '비트 · 루디먼츠 · 그루브',
      '장르별 드럼 스타일',
      '더블 베이스 및 고급 테크닉',
      '밴드 활동 · 공연 경험',
    ],
  },
  {
    id: 'keyboard',
    name: '건반',
    nameEn: 'Keyboard',
    intro:
      '피아노와 신스 연주로 음악 이론의 기초를 다지고, 현대 음악 제작의 중심이 되는 건반 악기를 익힙니다.',
    topics: [
      '건반 악기 기초 · 지판 이해',
      '음악 이론과 화성',
      '고전음악 · 팝 · 재즈 스타일',
      '신스 프로그래밍',
      '편곡 및 음악 제작',
    ],
  },
  {
    id: 'composition-midi',
    name: '작곡/미디',
    nameEn: 'Composition/MIDI',
    intro:
      '음악 이론부터 실전 작곡과 미디 프로덕션까지, 나만의 음악을 창조하는 모든 과정을 배웁니다.',
    topics: [
      '음악 이론 · 화성 · 멜로디 작곡',
      'DAW 기초 (Logic, Ableton, Cubase)',
      '악기별 편곡 및 어레인지',
      '비트 메이킹 및 프로덕션',
      '포트폴리오 제작 및 음원 배포',
    ],
  },
];

export interface CourseType {
  id: string;
  name: string;
  nameEn: string;
  target: string[];
  features: string[];
  duration: string;
}

export const courseTypes: CourseType[] = [
  {
    id: 'audition',
    name: '입시반',
    nameEn: 'Audition',
    target: [
      '음악대학 · 예술고등학교 입시 준비생',
      '실용음악과 진학을 목표로 하는 학생',
    ],
    features: [
      '1:1 집중 레슨으로 맞춤형 커리큘럼',
      '입시 경향 분석과 오디션곡 컨설팅',
      '입시 모의고사 및 실전 무대 경험',
      '최단 기간 합격 목표 달성',
    ],
    duration: '6개월 ~ 1년',
  },
  {
    id: 'hobby',
    name: '취미반',
    nameEn: 'Hobby',
    target: [
      '음악을 배우고 싶은 성인',
      '초보 ~ 중급 수준의 취미 수강생',
    ],
    features: [
      '유연한 시간대 선택 가능',
      '기초부터 단계별 맞춤형 교육',
      '음악을 즐기는 데 중점',
      '정기 공연과 앙상블 활동',
    ],
    duration: '자유 (최소 3개월 권장)',
  },
  {
    id: 'professional',
    name: '전문반',
    nameEn: 'Professional',
    target: [
      '현직 뮤지션 또는 뮤지션 지망생',
      '녹음, 작곡, 프로덕션 특화 희망자',
    ],
    features: [
      '최고 수준 강사진의 심화 교육',
      '실제 음악 프로젝트 현장 경험',
      '스튜디오급 시설 우선 사용권',
      '음악 산업 네트워킹 기회',
    ],
    duration: '6개월 이상',
  },
];

export interface ScheduleSlot {
  time: string;
  days: boolean[]; // [월,화,수,목,금,토]
}

export const schedule: ScheduleSlot[] = [
  { time: '10:00', days: [false, false, false, false, false, true] },
  { time: '14:00', days: [true, true, true, true, true, true] },
  { time: '16:00', days: [true, true, true, true, true, true] },
  { time: '18:00', days: [true, true, true, true, true, false] },
  { time: '20:00', days: [true, true, true, true, true, false] },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: '상담 신청', description: '온라인 폼 또는 전화로 무료 상담 신청' },
  { step: 2, title: '레벨 테스트', description: '방문 또는 온라인으로 현재 수준 평가' },
  { step: 3, title: '반 배정', description: '개인 맞춤 커리큘럼 및 강사 매칭' },
  { step: 4, title: '수업 시작', description: '정규 수업 시작, 정기적인 피드백 제공' },
];

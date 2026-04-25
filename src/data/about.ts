export interface CoreValue {
  icon: string;
  title: string;
  titleEn: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: 'BookOpen',
    title: '체계적 교육',
    titleEn: 'Systematic',
    description: '음악 이론의 기초부터 실전 무대까지, 단계별 커리큘럼으로 체계적으로 성장합니다.',
  },
  {
    icon: 'Mic',
    title: '실전형 교육',
    titleEn: 'Practical',
    description: '현직 뮤지션 강사의 경험과 노하우를 바탕으로, 실제 음악 현장에서 필요한 스킬을 배웁니다.',
  },
  {
    icon: 'Users',
    title: '개인맞춤 교육',
    titleEn: 'Personalized',
    description: '개인의 수준과 목표에 맞춘 1:1 맞춤 레슨으로, 가장 효율적인 성장을 도와드립니다.',
  },
];

export interface TimelineItem {
  year: string;
  event: string;
}

export const timeline: TimelineItem[] = [
  { year: '2024', event: '미디 작곡반 신설, 수강생 500명 돌파' },
  { year: '2023', event: 'OO 음악 콩쿠르 대상 수상, 강사 및 수강생 수상 다수' },
  { year: '2022', event: '녹음실 및 공연장 확장 이전, 시설 업그레이드 완료' },
  { year: '2021', event: '강사진 국제 음악 심포지엄 참석 및 수상' },
  { year: '2020', event: '와일드 비트 실용 음악 학원 공식 설립' },
];

export interface Facility {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
}

export const facilities: Facility[] = [
  {
    id: 'practice',
    name: '연습실',
    nameEn: 'Practice Rooms',
    description:
      '방음 처리된 개별 연습실로, 충분한 시간 집중해서 연습할 수 있습니다. 수업 시간 외에도 예약을 통해 자유롭게 이용 가능합니다.',
    icon: 'Music',
  },
  {
    id: 'recording',
    name: '녹음실',
    nameEn: 'Recording Studio',
    description:
      '전문 엔지니어가 상주하는 풀 이퀴프 녹음실에서 고품질의 데모 앨범, 포트폴리오 제작이 가능합니다.',
    icon: 'Radio',
  },
  {
    id: 'stage',
    name: '공연장',
    nameEn: 'Performance Hall',
    description:
      '정기 공연, 발표회, 뮤직페스티벌 등을 개최하는 공연장으로, 학생들의 실전 무대 경험을 지원합니다.',
    icon: 'Theater',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: '수강료는 얼마인가요?',
    answer:
      '수강료는 전공, 과정 유형, 수업 횟수에 따라 달라집니다. 입시반은 1:1 맞춤 커리큘럼으로 인해 취미반과 다르며, 월 4회, 월 8회 등 횟수별로도 상이합니다. 정확한 가격은 상담 시 개별 안내드리겠습니다.',
  },
  {
    question: '악기가 없어도 수강할 수 있나요?',
    answer:
      '네, 문제없습니다. 학원의 모든 연습실에는 보컬용 마이크, 기타, 드럼, 건반 악기가 구비되어 있습니다. 수업 시간 외에도 예약을 통해 자유롭게 연습실을 사용하실 수 있습니다.',
  },
  {
    question: '입시 준비는 언제부터 시작하면 좋나요?',
    answer:
      '음악대학 입시 준비는 늦어도 고등학교 2학년 1학기에는 시작할 것을 권장합니다. 다만 본인의 기초 수준에 따라 고1부터 시작하는 것이 유리할 수 있습니다. 상담 시 최적의 준비 기간을 제안드리겠습니다.',
  },
  {
    question: '무료 체험 수업이 있나요?',
    answer:
      '공식적인 무료 레슨은 없지만, 상담 신청 시 30분 정도의 무료 레벨 테스트를 진행합니다. 이를 통해 현재 수준을 파악하고 최적의 커리큘럼을 설계할 수 있습니다.',
  },
  {
    question: '주차가 가능한가요?',
    answer:
      '네, 와일드 비트가 위치한 건물 내에 주차장이 있습니다. 레슨 시간 동안 2시간 무료 주차가 가능하며, 추가 주차 요금은 건물 규정에 따릅니다.',
  },
  {
    question: '수업 시간을 변경할 수 있나요?',
    answer:
      '네, 변경 가능합니다. 변경 희망 시간 최소 24시간 전에 연락을 주셔야 조정이 가능합니다. 긴급한 경우 강사와 직접 협의하여 예외 조정할 수 있습니다.',
  },
  {
    question: '환불 규정은 어떻게 되나요?',
    answer:
      '환불 규정은 학원 규정에 따르며, 수강료 결제 후 기간에 따라 상이합니다. 자세한 내용은 상담 신청 후 개별적으로 안내해드리겠습니다.',
  },
  {
    question: '수강생들은 공연 기회가 있나요?',
    answer:
      '네, 정기적으로 내부 발표회와 공식 공연을 개최합니다. 모든 수강생에게 연간 최소 1~2회의 공연 참여 기회를 제공하며, 동아리나 밴드 활동도 가능합니다.',
  },
];

export const contactInfo = {
  phone: '02-XXXX-XXXX',
  kakao: '@wildbeat',
  email: 'info@wildbeat.co.kr',
  address: '서울시 강남구 OO로 OO길 OO (건물명)',
  hours: [
    { day: '평일 (월~금)', time: '10:00 ~ 22:00' },
    { day: '토요일', time: '10:00 ~ 18:00' },
    { day: '일요일 · 공휴일', time: '휴무' },
  ],
  transport: {
    subway: 'O호선 O역 O번 출구 도보 5분',
    bus: 'OOO, OOO번 정류소 인근',
    parking: '건물 내 주차 가능 (2시간 무료)',
  },
};

export const courseOptions = [
  { value: 'vocal', label: '보컬 (Vocal)' },
  { value: 'guitar', label: '기타 (Guitar)' },
  { value: 'drums', label: '드럼 (Drums)' },
  { value: 'keyboard', label: '건반 (Keyboard)' },
  { value: 'composition', label: '작곡/미디 (Composition/MIDI)' },
  { value: 'other', label: '기타 (Other)' },
];

export const timeOptions = [
  { value: 'morning', label: '오전 (10:00~12:00)' },
  { value: 'afternoon', label: '오후 (14:00~17:00)' },
  { value: 'evening', label: '저녁 (18:00~21:00)' },
  { value: 'weekend', label: '주말 (토요일)' },
  { value: 'anytime', label: '상관없음' },
];

export interface Course {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: 'vocal',
    name: '보컬',
    nameEn: 'Vocal',
    description: '당신만의 목소리를 찾아보세요. 음악의 가장 기본이 되는 발성과 감정 표현 능력을 함께 키워갑니다.',
    icon: 'Mic',
  },
  {
    id: 'guitar',
    name: '기타',
    nameEn: 'Guitar',
    description: '손끝으로 표현하는 음악의 감정. 어쿠스틱부터 일렉 기타까지, 모든 것을 배울 수 있습니다.',
    icon: 'Guitar',
  },
  {
    id: 'drums',
    name: '드럼',
    nameEn: 'Drums',
    description: '리듬의 심장, 드럼으로 음악을 주도하세요. 정확한 비트감과 강한 무대 표현력을 한 번에 습득합니다.',
    icon: 'Drum',
  },
  {
    id: 'keyboard',
    name: '건반',
    nameEn: 'Keyboard',
    description: '음악 이론의 기초, 건반에서 시작합니다. 피아노와 신스 연주로 음악의 폭을 넓혀봅시다.',
    icon: 'Piano',
  },
  {
    id: 'composition',
    name: '작곡',
    nameEn: 'Composition',
    description: '나만의 음악을 창조하고 싶으신가요? 음악 이론부터 실전 작곡까지, 창작의 기쁨을 느껴봅시다.',
    icon: 'Music2',
  },
  {
    id: 'midi',
    name: '미디',
    nameEn: 'MIDI',
    description: '디지털 시대의 음악 제작 기술. 현대 음악의 중심이 되는 미디 프로덕션을 배워봅시다.',
    icon: 'Music',
  },
];

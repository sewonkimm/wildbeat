export interface Instructor {
  id: string;
  name: string;
  specialty: string;
  specialtyEn: string;
  role: string;
  experience: string;
  education: string[];
  career: string[];
  quote: string;
  image: string;
}

export const instructors: Instructor[] = [
  {
    id: '1',
    name: '김민지',
    specialty: '보컬',
    specialtyEn: 'Vocal',
    role: '보컬 수석 강사',
    experience: '경력 15년',
    education: ['서울대학교 음악대학 성악과 졸업', '서울대학원 성악 석사 수료'],
    career: [
      '현대음악관현악단 성악 솔리스트 (2015~현재)',
      'OO 오페라단 주역 출연 다수',
      '음악대학 입시 컨설턴트 (강의 경력 8년)',
      '보컬 아카데미 대표 강사 역임',
    ],
    quote: '음악은 테크닉이 아니라 이야기입니다. 당신만의 이야기를 찾아드리겠습니다.',
    image: '/images/instructors/placeholder-1.jpg',
  },
  {
    id: '2',
    name: '이준호',
    specialty: '기타',
    specialtyEn: 'Guitar',
    role: '기타 전공 강사',
    experience: '경력 12년',
    education: [
      'OO대학교 실용음악과 기타 전공 졸업',
      '미국 Berklee College of Music 정규 수료',
    ],
    career: [
      '유명 팝 아티스트 백업 기타리스트 (2012~현재)',
      '다수 음반 세션 참여',
      '유명 라이브 클럽 하우스밴드 리더',
      '기타 교실 운영 (12년 경력)',
    ],
    quote: '기타는 한 대면 충분합니다. 제대로 배우면 무한의 가능성이 열립니다.',
    image: '/images/instructors/placeholder-2.jpg',
  },
  {
    id: '3',
    name: '박세진',
    specialty: '드럼',
    specialtyEn: 'Drums',
    role: '드럼 전공 강사',
    experience: '경력 10년',
    education: [
      '한국예술종합학교 음악원 타악과 졸업',
      '한국예술종합학교 음악원 전문사 수료',
    ],
    career: [
      '국내 유명 밴드 드러머 (2013~현재)',
      '뮤직페스티벌 공식 드러머',
      '드럼 전공생 입시 지도 (6년)',
      '한국타악협회 회원',
    ],
    quote: '리듬은 음악의 심장입니다. 정확한 리듬감이 모든 것을 바꿉니다.',
    image: '/images/instructors/placeholder-3.jpg',
  },
  {
    id: '4',
    name: '정현주',
    specialty: '건반',
    specialtyEn: 'Keyboard',
    role: '건반 전공 강사',
    experience: '경력 13년',
    education: [
      '이화여자대학교 음악대학 피아노과 졸업',
      '오스트리아 빈 국립음악대학원 수료',
    ],
    career: [
      '현대 클래식 연주자이자 재즈 피아니스트',
      '영화 · 드라마 음악 감수 및 편곡',
      '뮤지컬 공식 피아니스트 (3년)',
      '음악 심포니 반주 및 피아노 교수 (7년)',
    ],
    quote: '건반은 음악 언어의 사전입니다. 여기서부터 모든 음악이 시작됩니다.',
    image: '/images/instructors/placeholder-4.jpg',
  },
  {
    id: '5',
    name: '이준영',
    specialty: '작곡/미디',
    specialtyEn: 'Composition/MIDI',
    role: '작곡/미디 전공 강사',
    experience: '경력 10년',
    education: [
      '영국 Middlesex University 컴퓨터음악과 졸업',
      '한국예술종합학교 음악원 전자음악 전문사 수료',
    ],
    career: [
      '음악 스트리밍 플랫폼 프로듀서',
      '영상 · 게임 음악 작곡 다수',
      'DAW 전문가 및 음악 기술 강사 (10년)',
      '미디 음악제 심사위원 역임',
    ],
    quote: '미디는 상상을 현실로 만드는 도구입니다. 당신의 음악을 세상에 나눠보세요.',
    image: '/images/instructors/placeholder-5.jpg',
  },
  {
    id: '6',
    name: '최은지',
    specialty: '보컬',
    specialtyEn: 'Vocal',
    role: '보컬 전공 강사',
    experience: '경력 10년',
    education: [
      '연세대학교 음악대학 실용음악과 졸업',
      '런던 음악 아카데미 성악 단기 과정 수료',
    ],
    career: [
      '유명 아이돌 그룹 보컬 트레이너 (2014~현재)',
      '음악 오디션 프로그램 코치',
      '보컬 입시 전문가 (배출 50명 이상)',
      '온·오프라인 성악 레슨 10년',
    ],
    quote: '가장 아름다운 악기는 당신의 목소리입니다. 그 잠재력을 깨워드리겠습니다.',
    image: '/images/instructors/placeholder-6.jpg',
  },
];

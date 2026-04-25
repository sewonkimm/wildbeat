export interface Testimonial {
  id: string;
  content: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    content:
      '와일드 비트에서 6개월 동안 준비해서 서울예대 실용음악과에 합격했습니다. 체계적인 커리큘럼과 강사님의 열정적인 지도가 정말 큰 도움이 되었어요.',
    name: '김서연',
    detail: '보컬 입시반 수료, 서울예대 합격',
  },
  {
    id: '2',
    content:
      '직장생활을 하면서 기타를 배우고 싶었는데, 시간이 유연해서 다닐 수 있었어요. 초보부터 친근하게 가르쳐 주신 덕분에 지금은 밴드 활동도 하고 있습니다.',
    name: '박준호',
    detail: '기타 취미반 수료, 밴드 활동 중',
  },
  {
    id: '3',
    content:
      '아이가 드럼에 관심이 있어서 입학시켰는데, 선생님을 정말 좋아합니다. 레벨에 맞춘 수업과 따뜻한 태도 덕분에 음악을 즐기는 법을 배웠어요.',
    name: '이정현',
    detail: '학부모, 자녀 드럼 입시반 수료 후 대학 진학',
  },
  {
    id: '4',
    content:
      '음악을 제대로 배우고 싶어서 찾았는데, 여기가 최고입니다. 미디 제작 실습부터 이론까지 완벽하게 배울 수 있었습니다.',
    name: '최현우',
    detail: '작곡/미디 전문반 수료, 음악 프로듀서 활동',
  },
];

export interface Achievement {
  icon: string;
  label: string;
  value: string;
}

export const achievements: Achievement[] = [
  { icon: 'Trophy', label: '입시 합격', value: '50+' },
  { icon: 'Mic', label: '공연 개최', value: '연 20+회' },
  { icon: 'Award', label: '수상 및 입상', value: '30+' },
];

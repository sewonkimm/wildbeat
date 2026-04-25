export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: '수강생' },
  { value: 95, suffix: '%', label: '입시합격률' },
  { value: 15, suffix: '+년', label: '강사 평균경력' },
  { value: 10, suffix: '+년', label: '운영연수' },
];

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { courseOptions, timeOptions } from '@/data/contact';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, '이름은 2자 이상 입력해주세요')
    .max(20, '이름은 20자 이하로 입력해주세요'),
  phone: z
    .string()
    .regex(/^01[0-9]-\d{3,4}-\d{4}$/, '올바른 전화번호 형식을 입력해주세요 (010-XXXX-XXXX)'),
  course: z.string().min(1, '관심 과정을 선택해주세요'),
  preferredTime: z.string().optional(),
  message: z.string().max(500, '문의 내용은 500자 이하로 입력해주세요').optional(),
  privacy: z.literal(true, { error: '개인정보 수집에 동의해주세요' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-gold p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-heading-md text-foreground mb-2">상담 신청이 완료되었습니다!</h3>
        <p className="text-body-md text-text-secondary mb-4">
          빠른 시일 내에 담당자가 연락드리겠습니다.
          <br />
          평균 응답 시간은 영업일 기준 1일 이내입니다.
        </p>
        <p className="text-body-sm text-text-muted">
          더 빠른 상담을 원하시면 카카오톡 채널{' '}
          <span className="text-primary font-medium">@wildbeat</span>을 추가해주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label className="input-label" htmlFor="name">
          이름 <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          className="input-base"
          placeholder="홍길동"
          {...register('name')}
        />
        {errors.name && <p className="input-error">{errors.name.message}</p>}
      </div>

      <div>
        <label className="input-label" htmlFor="phone">
          연락처 <span className="text-primary">*</span>
        </label>
        <input
          id="phone"
          className="input-base"
          placeholder="010-XXXX-XXXX"
          {...register('phone')}
        />
        {errors.phone && <p className="input-error">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="input-label" htmlFor="course">
          관심 과정 <span className="text-primary">*</span>
        </label>
        <select id="course" className="input-base" {...register('course')}>
          <option value="">과정을 선택해주세요</option>
          {courseOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.course && <p className="input-error">{errors.course.message}</p>}
      </div>

      <div>
        <label className="input-label" htmlFor="preferredTime">
          희망 시간대
        </label>
        <select id="preferredTime" className="input-base" {...register('preferredTime')}>
          <option value="">시간대를 선택해주세요 (선택 사항)</option>
          {timeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="input-label" htmlFor="message">
          문의 내용
        </label>
        <textarea
          id="message"
          className="input-base resize-none"
          rows={4}
          placeholder="궁금한 점이나 전달하고 싶은 내용을 입력해주세요."
          {...register('message')}
        />
        {errors.message && <p className="input-error">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          className="mt-1 w-4 h-4 accent-primary cursor-pointer"
          {...register('privacy')}
        />
        <label htmlFor="privacy" className="text-body-sm text-text-secondary cursor-pointer">
          개인정보 수집 및 이용에 동의합니다.{' '}
          <span className="text-primary">*</span>
        </label>
      </div>
      {errors.privacy && <p className="input-error -mt-3">{errors.privacy.message}</p>}

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center"
        onClick={undefined}
      >
        {isSubmitting ? '제출 중...' : '상담 신청하기'}
      </Button>
    </form>
  );
}

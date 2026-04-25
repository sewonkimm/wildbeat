import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="card-base p-4 flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-light flex items-center justify-center">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-label-sm text-text-muted uppercase tracking-wide mb-0.5">전화</p>
          <p className="text-body-md text-foreground font-medium">{contactInfo.phone}</p>
        </div>
      </div>

      <div className="card-base p-4 flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-light flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-label-sm text-text-muted uppercase tracking-wide mb-0.5">카카오톡</p>
          <p className="text-body-md text-foreground font-medium">{contactInfo.kakao}</p>
        </div>
      </div>

      <div className="card-base p-4 flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-light flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-label-sm text-text-muted uppercase tracking-wide mb-0.5">이메일</p>
          <p className="text-body-md text-foreground font-medium">{contactInfo.email}</p>
        </div>
      </div>

      <hr className="border-border my-2" />

      <div className="card-base p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-primary" />
          <p className="text-label-sm text-text-muted uppercase tracking-wide">운영 시간</p>
        </div>
        <ul className="space-y-2">
          {contactInfo.hours.map((h) => (
            <li key={h.day} className="flex justify-between text-body-sm">
              <span className="text-text-secondary">{h.day}</span>
              <span className="text-foreground font-medium">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

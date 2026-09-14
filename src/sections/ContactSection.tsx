import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ContactBox } from '../components/ContactBox';
import { ArrowUp, Mail } from 'lucide-react';

interface ContactSectionProps {
  eyebrow: string;
  headline: string;
  email: string;
  onNavigate: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  eyebrow,
  headline,
  email,
  onNavigate,
}) => {
  return (
    <section id="contact" className="stack-section bg-dark" data-id="contact">
      <div className="inner reveal in-view">
        <SectionHeader eyebrow={eyebrow} headline={headline} isDark={true} />

        <p className="text-gray-400 text-[14px] leading-[22.75px] m-0">
          Whether you need a design partner to take your product from 0 to 1, or advisory on frontend craftsmanship.
        </p>

        <ContactBox email={email} />

        <div className="contact-actions">
          <a
            href={`mailto:${email}`}
            className="btn btn-primary"
          >
            <Mail size={14} />
            <span>Compose message →</span>
          </a>
          <button
            onClick={() => onNavigate('home')}
            className="btn btn-outline"
          >
            <ArrowUp size={14} />
            <span>Return to top</span>
          </button>
        </div>
      </div>
    </section>
  );
};

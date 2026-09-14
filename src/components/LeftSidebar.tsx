import React from 'react';
import { ProfileData } from '../types/portfolio';
import { ArrowRight } from 'lucide-react';

interface LeftSidebarProps {
  profile: ProfileData;
  onNavigate: (sectionId: string) => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ profile, onNavigate }) => {
  return (
    <aside className="aside-left-sticky bg-white border-r border-gray-200 p-10 flex flex-col justify-between">
      <div>
        <span className="badge-available">
          <span className="badge-dot"></span>
          {profile.availability}
        </span>
        
        <div className="avatar-wrap">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full object-cover rounded-[120px]"
          />
        </div>
      </div>

      <div className="identity-copy">
        <h1 className="name-title text-[30px] font-extrabold tracking-[-0.75px] m-0">
          {profile.name}
        </h1>
        <div className="role-title flex items-center gap-1.5 text-emerald-700 font-semibold text-[14px] my-2">
          <span className="badge-dot"></span>
          {profile.role}
        </div>
        <p className="bio-text text-gray-500 text-[12px] leading-[19.5px] mb-6 mt-0">
          {profile.bio}
        </p>
      </div>

      <div>
        <button
          onClick={() => onNavigate('contact')}
          className="btn btn-dark w-full justify-between"
          aria-label="Get in touch"
        >
          <span>Get in touch</span>
          <ArrowRight size={14} />
        </button>

        <div className="social-row flex items-center gap-1.5 text-gray-500 text-[12px] mt-4">
          {profile.socials.map((social, idx) => (
            <React.Fragment key={social.code}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-600 transition-colors"
              >
                {social.code} / {social.label}
              </a>
              {idx < profile.socials.length - 1 && <span className="text-gray-200">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};

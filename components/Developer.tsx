import React from 'react';
import { Github, Twitter, Box } from 'lucide-react';

export const Developer: React.FC = () => {
  return (
    <section className="py-32 bg-wash text-center">
      <div className="max-w-xl mx-auto px-6">
        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-8 shadow-soft flex items-center justify-center text-2xl">
            👨‍💻
        </div>
        <h2 className="font-serif text-4xl text-ink mb-6">Crafted by Pankaj Kumar.</h2>
        <p className="text-pencil mb-10">
          Building tools for developers who care about craft.
        </p>
        
        <div className="flex justify-center gap-8">
          <SocialLink href="https://twitter.com/pankajkumar_dev" icon={Twitter} label="@pankajkumar_dev" />
          <SocialLink href="https://github.com/pankajkumardev" icon={Github} label="pankajkumardev" />
          <SocialLink href="https://www.npmjs.com/package/gitgenius" icon={Box} label="npm/gitgenius" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <a 
    href={href}
    className="flex items-center gap-2 text-pencil hover:text-indigo transition-colors"
    target="_blank"
    rel="noreferrer"
  >
    <Icon size={18} />
    <span className="font-mono text-sm hidden md:inline">{label}</span>
  </a>
);
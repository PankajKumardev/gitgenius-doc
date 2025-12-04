import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-2xl italic mb-1">GitGenius</h4>
          <p className="text-white/40 text-sm font-mono">v1.1.2 • Stable</p>
        </div>
        
        <div className="flex gap-8 text-sm text-white/60 font-mono">
          <a href="https://github.com/pankajkumardev/gitgenius#readme" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a>
          <a href="https://github.com/pankajkumardev/gitgenius/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">License</a>
          <a href="https://github.com/pankajkumardev/gitgenius" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>

        <div className="text-white/40 text-xs font-mono">
          Made with ❤️ in 2025.
        </div>
      </div>
    </footer>
  );
};
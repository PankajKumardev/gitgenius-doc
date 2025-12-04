import React from 'react';

const technologies = [
  { name: 'TypeScript', label: 'TS' },
  { name: 'Prisma', label: 'Prisma' },
  { name: 'SQLite', label: 'SQLite' },
  { name: 'Oclif', label: 'Oclif' },
];

export const Integration: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-mono uppercase tracking-widest text-pencil mb-12">Built on modern foundations</h3>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex items-center gap-3 cursor-default transition-all duration-300 hover:opacity-100"
            >
              <span className="text-3xl md:text-4xl font-serif text-gray-300 group-hover:text-ink transition-colors duration-300">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
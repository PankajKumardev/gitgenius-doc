import React from 'react';
import { motion } from 'framer-motion';

export const DeepDive: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="font-serif text-5xl md:text-7xl text-ink mb-8">
            Stop <span className="italic text-git">Grepping</span>.
            <br />
            Start <span className="italic text-indigo">Asking</span>.
          </h2>
          <p className="text-xl text-pencil font-light leading-relaxed max-w-md">
            Context switching kills flow. GitGenius understands the semantic meaning behind your code, not just string matches.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-6">
            <ChatMessage 
              sender="User" 
              text="Where is the auth logic for the dashboard?" 
              align="right"
              delay={0}
            />
            <ChatMessage 
              sender="GitGenius" 
              text="Found in src/features/auth/AuthProvider.tsx."
              subtext="It seems to be using a Context-based approach introduced in commit 8f2a1b."
              align="left"
              delay={0.5}
              isAi
            />
            <ChatMessage 
              sender="User" 
              text="Are there any known bugs in the login flow?" 
              align="right"
              delay={2}
            />
             <ChatMessage 
              sender="GitGenius" 
              text="Yes, there's a TODO in LoginController.ts line 45 regarding a race condition during token refresh."
              align="left"
              delay={2.8}
              isAi
            />
          </div>
          
          {/* Subtle line decoration */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/5 -z-10 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

const ChatMessage = ({ sender, text, subtext, align, delay, isAi }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.5 }}
    className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'}`}
  >
    <span className="text-xs font-mono text-pencil mb-2 uppercase tracking-widest">{sender}</span>
    <div className={`
      max-w-md p-6 rounded-2xl shadow-soft border 
      ${isAi ? 'bg-background border-indigo/20' : 'bg-white border-black/5'}
    `}>
      <p className={`text-lg ${isAi ? 'text-ink' : 'text-pencil'}`}>{text}</p>
      {subtext && (
        <div className="mt-3 pt-3 border-t border-black/5">
           <p className="text-sm font-mono text-indigo">{subtext}</p>
        </div>
      )}
    </div>
  </motion.div>
);
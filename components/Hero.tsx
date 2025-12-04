import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showResult, setShowResult] = useState(false);
  
  const fullCommand = 'gitgenius analyze';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowResult(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-16 z-10"
      >
        <h1 className="font-serif text-6xl md:text-8xl text-ink leading-[1.1] mb-6">
          Your Git History,<br/>
          <span className="italic text-indigo">Decoded</span>.
        </h1>
        <p className="text-xl text-pencil max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Transform your repository into an intelligent knowledge base.<br className="hidden md:block"/>
          Zero config. Local-first. AI-powered.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="https://www.npmjs.com/package/gitgenius" target="_blank" rel="noopener noreferrer">
            Install v1.1.2 <ArrowRight size={16} />
          </Button>
          <Button variant="outline" href="https://github.com/pankajkumardev/gitgenius" target="_blank" rel="noopener noreferrer">
            View Source <TerminalIcon size={16} />
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-3xl relative"
      >
        {/* Terminal Window */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-black/5">
          <div className="bg-gray-50 border-b border-black/5 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-auto text-xs text-pencil font-mono">zsh — 80x24</div>
          </div>
          <div className="p-8 font-mono text-sm md:text-base bg-white min-h-[300px] text-ink">
            <div className="flex gap-3 items-center text-pencil mb-2">
              <span>$</span>
              <span className="text-ink">{typedText}<span className="animate-pulse">_</span></span>
            </div>
            
            {showResult && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4 space-y-2"
              >
                <div className="flex gap-2 text-indigo">
                  <span>➜</span>
                  <span>Analyzing repository structure...</span>
                </div>
                <div className="flex gap-2 text-indigo delay-300">
                  <span>➜</span>
                  <span>Parsing commit history (2,405 commits)...</span>
                </div>
                <br />
                <div className="p-4 bg-indigo/5 rounded border border-indigo/10">
                  <div className="text-indigo font-bold flex items-center gap-2 mb-2">
                    <span>🧠</span> AI Analysis Complete
                  </div>
                  <ul className="space-y-1 text-ink/80">
                    <li>• Detected <span className="text-indigo font-bold">3 architectural patterns</span> in /src</li>
                    <li>• Identified potential auth regression in <span className="bg-gray-100 px-1 rounded">commit a0f104b</span></li>
                    <li>• Suggested refactor for <span className="font-bold">UserProfile.tsx</span> (Complexity: High)</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo/5 via-transparent to-git/5 blur-3xl rounded-full pointer-events-none"></div>
      </motion.div>
    </section>
  );
};
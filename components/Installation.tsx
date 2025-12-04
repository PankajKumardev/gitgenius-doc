import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Installation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g gitgenius";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-surface flex justify-center items-center">
      <div 
        onClick={handleCopy}
        className="group relative cursor-pointer"
      >
        <div className="flex items-center gap-4 px-8 py-5 bg-background rounded-lg border border-black/5 transition-all duration-300 hover:border-indigo/30 hover:shadow-soft">
          <code className="font-mono text-lg text-ink">
            <span className="text-indigo">npm</span> install -g gitgenius
          </code>
          <div className="text-pencil transition-colors group-hover:text-indigo">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </div>
        
        <AnimatePresence>
          {copied && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-10"
            >
              <span className="font-serif italic text-indigo text-sm">Copied to clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
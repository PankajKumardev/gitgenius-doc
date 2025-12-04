import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, MessageSquareCode } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Gemini 2.5 Flash",
    description: "Powered by the latest multimodal models for lightning-fast context understanding.",
    color: "text-indigo"
  },
  {
    icon: Lock,
    title: "Local-First Privacy",
    description: "Your code never trains public models. Vectors are stored locally in SQLite.",
    color: "text-git"
  },
  {
    icon: MessageSquareCode,
    title: "Natural Language",
    description: "Query your codebase like you're talking to a senior engineer. No regex required.",
    color: "text-ink"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col items-start"
          >
            <div className={`p-4 rounded-2xl bg-white shadow-sm mb-6 ${feature.color} bg-opacity-5`}>
              <feature.icon size={32} strokeWidth={1.5} className={feature.color} />
            </div>
            <h3 className="font-serif text-3xl text-ink mb-4 group-hover:italic transition-all">
              {feature.title}
            </h3>
            <p className="text-pencil leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
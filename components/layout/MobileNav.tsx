'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { number: '01', label: 'Home', id: 'home' },
  { number: '02', label: 'About', id: 'about' },
  { number: '03', label: 'Work', id: 'projects' },
  { number: '04', label: 'Skills', id: 'skills' },
  { number: '05', label: 'Path', id: 'experience' },
  { number: '06', label: 'Education', id: 'education' },
  { number: '07', label: 'Say hi', id: 'contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-bg-secondary border border-border rounded-full z-50 flex items-center justify-center lg:hidden shadow-lg font-technical text-xs text-text-primary transition-colors hover:text-accent-primary"
      >
        <span className="sr-only">Open menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-text-primary transition-colors hover:text-accent-primary"
            >
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="flex flex-col items-center gap-8 w-full px-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleClick(section.id)}
                  className="font-display text-4xl text-text-primary hover:text-accent-primary transition-colors flex items-center gap-4 group"
                >
                  <span className="font-technical text-sm text-text-muted mt-2 group-hover:text-accent-primary transition-colors">
                    {section.number}
                  </span>
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

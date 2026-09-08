'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { number: '01', label: 'Home', id: 'home' },
  { number: '02', label: 'About', id: 'about' },
  { number: '03', label: 'Work', id: 'projects' },
  { number: '04', label: 'Skills', id: 'skills' },
  { number: '05', label: 'Path', id: 'experience' },
  { number: '06', label: 'Education', id: 'education' },
  { number: '07', label: 'Say hi', id: 'contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 pl-6 border-l border-border">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="relative flex items-center group text-left"
          >
            {/* Active border indicator */}
            <div
              className={cn(
                "absolute -left-[25px] top-1/2 -translate-y-1/2 w-[2px] h-[150%] transition-colors duration-300",
                isActive ? "bg-accent-primary" : "bg-transparent group-hover:bg-text-muted/30"
              )}
            />

            <span
              className={cn(
                "font-technical text-xs transition-colors duration-300 flex items-center whitespace-nowrap",
                isActive
                  ? "text-accent-primary"
                  : "text-text-muted group-hover:text-text-secondary"
              )}
            >
              {section.number} <span className="mx-2">—</span> {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const colors = [
    'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'bg-green-500/20 text-green-300 border-green-500/30',
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className="h-full p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-50 mb-6">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-110 transform ${
                        colors[index % colors.length]
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency levels */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Advanced',
              description: 'React, Node.js, MongoDB, JavaScript/TypeScript',
              level: 95,
            },
            {
              title: 'Intermediate',
              description: 'Express, REST APIs, Tailwind CSS, Firebase',
              level: 85,
            },
            {
              title: 'Learning',
              description: 'Next.js, GraphQL, Docker, AWS Services',
              level: 70,
            },
            {
              title: 'Familiar',
              description: 'Flutter, Dart, Testing Frameworks, DevOps',
              level: 60,
            },
          ].map((proficiency, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(portfolioData.skills.length + index) * 100}ms` }}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-slate-50">{proficiency.title}</h4>
                  <span className="text-blue-400 font-bold">{proficiency.level}%</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{proficiency.description}</p>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? `${proficiency.level}%` : '0%',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

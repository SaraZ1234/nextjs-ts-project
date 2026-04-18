'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {portfolioData.experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full text-left p-6 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 ml-4">{activeIndex === index ? '−' : '+'}</span>
                </div>

                {/* Timeline info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.startDate} → {exp.endDate}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Expanded content */}
                {activeIndex === index && (
                  <div
                    className="mt-6 pt-6 border-t border-slate-700 space-y-4 animate-slideDown"
                  >
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-slate-400 mb-3">
                        Technologies Used:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Award, Calendar } from 'lucide-react';

export default function Education() {
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

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-6 bg-slate-900/50 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline line */}
              {index !== portfolioData.education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-30" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-50 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 font-medium">{edu.institution}</p>
                        <p className="text-slate-400 text-sm mt-1">{edu.field}</p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm ml-4 flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.graduationYear}</span>
                      </div>
                    </div>

                    {edu.details && (
                      <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications section */}
        <div className="mt-16 pt-16 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-slate-50 mb-8">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Full-Stack Web Development',
                issuer: 'Udemy',
                date: '2023',
              },
              {
                title: 'React Advanced Patterns',
                issuer: 'Frontend Masters',
                date: '2024',
              },
              {
                title: 'Node.js & Express Complete',
                issuer: 'Udemy',
                date: '2023',
              },
              {
                title: 'MongoDB Database Design',
                issuer: 'MongoDB University',
                date: '2024',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 transform hover:translate-y--2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${(portfolioData.education.length * 150 + index * 100)}ms`,
                }}
              >
                <h4 className="text-lg font-semibold text-slate-50 mb-2">
                  {cert.title}
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

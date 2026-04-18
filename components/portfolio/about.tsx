'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';

export default function About() {
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
      id="about"
      ref={ref}
      className="py-20 px-6 bg-slate-900/50 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div
            className={`space-y-6 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a junior full-stack developer with a passion for creating beautiful and functional web applications. My journey in tech started with a curiosity about how things work, which evolved into a dedicated pursuit of mastering modern web development.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              With experience in both frontend and backend technologies, I enjoy the challenge of building complete solutions that solve real problems. I&apos;m particularly interested in the intersection of design and functionality, where QA integration ensures quality.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div>
                <p className="text-3xl font-bold text-blue-400">50+</p>
                <p className="text-slate-400 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">2+</p>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">100%</p>
                <p className="text-slate-400 text-sm">Dedication</p>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-4">
              {[
                { title: 'Full-Stack Development', desc: 'Building complete solutions from database to UI' },
                { title: 'React Expertise', desc: 'Creating interactive and performant UIs' },
                { title: 'Node.js Backend', desc: 'Developing scalable server-side applications' },
                { title: 'QA Integration', desc: 'Ensuring code quality and comprehensive testing' },
                { title: 'Mobile Development', desc: 'Cross-platform app development with Flutter' },
                { title: 'Problem Solving', desc: 'Finding elegant solutions to complex challenges' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 transform hover:translate-x-2"
                >
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

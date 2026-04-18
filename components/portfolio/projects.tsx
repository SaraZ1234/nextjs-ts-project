'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
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

  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 bg-slate-950 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300">
                {/* Content */}
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-400">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* Image placeholder */}
                <div className="order-1 md:order-2 h-64 md:h-80 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700/50 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <div className="text-center">
                    <div className="text-5xl mb-3">{'</>'}</div>
                    <p className="text-slate-400">{project.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-8">
              Other Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group transition-all duration-500 transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${(featuredProjects.length + index) * 100}ms`,
                  }}
                >
                  <div className="h-full p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 flex flex-col">
                    <h4 className="text-lg font-bold text-slate-50 mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-slate-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(project.link || project.repository) && (
                        <div className="flex gap-2 pt-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                            >
                              Live <ArrowRight className="w-3 h-3" />
                            </a>
                          )}
                          {project.repository && (
                            <a
                              href={project.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-slate-400 hover:text-slate-300 transition-colors text-sm"
                            >
                              Code <ArrowRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

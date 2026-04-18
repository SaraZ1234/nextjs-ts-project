'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Greeting */}
        <div className="mt-22 mb-6 inline-block">
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-2 animate-fadeIn">
            Welcome to my portfolio
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight animate-fadeIn">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl text-slate-300 mb-4 animate-fadeIn">
          {portfolioData.title}
        </h2>

        {/* Description */}
        <p className="mt-5 text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
          {portfolioData.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-slate-400 text-slate-300 hover:text-white hover:border-white font-semibold rounded-lg transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16 animate-fadeIn">
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        {!isScrolled && (
          <div
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
            role="button"
            tabIndex={0}
          >
            <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeIn:nth-child(2) {
          animation-delay: 0.1s;
        }

        .animate-fadeIn:nth-child(3) {
          animation-delay: 0.2s;
        }

        .animate-fadeIn:nth-child(4) {
          animation-delay: 0.3s;
        }

        .animate-fadeIn:nth-child(5) {
          animation-delay: 0.4s;
        }

        .animate-fadeIn:nth-child(6) {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}

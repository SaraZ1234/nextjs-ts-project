'use client';

import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Let&apos;s Get in Touch
          </h2>
          <p className="text-slate-400 text-lg">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-500 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-slate-900/50 border border-slate-700/50 rounded-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 animate-fadeIn text-center">
                  Thanks! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-500 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-8">
              {/* Direct contact */}
              <div>
                <h3 className="text-2xl font-bold text-slate-50 mb-6">
                  Connect With Me
                </h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-slate-50 font-semibold group-hover:text-blue-400 transition-colors">
                        {portfolioData.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">LinkedIn</p>
                      <p className="text-slate-50 font-semibold group-hover:text-blue-400 transition-colors">
                        Sarah Javaid
                      </p>
                    </div>
                  </a>

                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-600">
                      <Github className="w-6 h-6 text-slate-300" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">GitHub</p>
                      <p className="text-slate-50 font-semibold group-hover:text-slate-200 transition-colors">
                        GitHub Profile
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Info box */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">
                  Let&apos;s Work Together
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;m open to freelance projects, full-time positions, and collaboration opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-700/50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-slate-400 flex items-center justify-center gap-2 mb-4">
            Crafted with{' '}
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            by Sarah Javaid
          </p>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sarah Javaid. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-3">
            Built with React • TypeScript • Tailwind CSS • Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

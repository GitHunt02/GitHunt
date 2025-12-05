// app/page.tsx (Updated)

'use client';
import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Feautures';
import TechNews from './components/TechNews';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AIRecommendation from './components/AIRecommendation';
import Leaderboard from './components/Leaderboard';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
  const { data: session, status } = useSession();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10">
        {!session ? (
          // Before Sign-In: Original Landing Page
          <>
            <Hero />
            <Features />
            <Stats />

            {/* Sign In Section */}
            {status !== 'loading' && (
              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-slate-300">GitHub Integration</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="text-white">Unlock Personalized </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400">
                      Recommendations
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                    Connect your GitHub account to get AI-powered project recommendations and see your ranking on the leaderboard.
                  </p>
                  <Button
                    onClick={() => signIn('github')}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 px-8 py-3 text-lg"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Connect to GitHub
                  </Button>
                </div>
              </div>
            )}

            <CTA />
          </>
        ) : (
          // After Sign-In: Dashboard View
          <>
            <AIRecommendation />
            <Leaderboard />
            <TechNews />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}
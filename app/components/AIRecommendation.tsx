'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Sparkles, Loader2, Github, Star, GitFork } from 'lucide-react';

interface Recommendation {
  id: number;
  title: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

const dummyRecommendations: Recommendation[] = [
  {
    id: 1,
    title: 'next-auth',
    description: 'Complete open source authentication solution for Next.js applications.',
    stars: 18000,
    forks: 1600,
    language: 'TypeScript',
    url: 'https://github.com/nextauthjs/next-auth',
  },
  {
    id: 2,
    title: 'tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    stars: 72000,
    forks: 3800,
    language: 'CSS',
    url: 'https://github.com/tailwindlabs/tailwindcss',
  },
  {
    id: 3,
    title: 'react-query',
    description: 'Powerful data synchronization for React.',
    stars: 36000,
    forks: 2200,
    language: 'TypeScript',
    url: 'https://github.com/tanstack/query',
  },
];

export default function AIRecommendation() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (session) {
      // Simulate API call
      const timer = setTimeout(() => {
        setRecommendations(dummyRecommendations);
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [session]);

  if (!session) return null;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-slate-300">AI Powered</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Recommended for </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400">
              You
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Based on your GitHub profile, here are some projects you might find interesting
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin mb-4" />
            <p className="text-slate-400">Analyzing your GitHub profile...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <Card
                key={rec.id}
                className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                      <Github className="w-6 h-6 text-purple-400" />
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      {rec.language}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {rec.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {rec.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{rec.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{rec.forks.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>

                <div className="p-6 pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                  >
                    <a href={rec.url} target="_blank" rel="noopener noreferrer">
                      View Repository
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

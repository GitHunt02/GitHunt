'use client';

import { Card, CardContent, CardFooter, CardHeader } from '/components/ui';
import { Button } from '/components/ui';
import { Badge } from '/components/ui';
import { Package, TrendingUp, Zap } from 'lucide-react';

interface Bounty {
  id: number;
  title: string;
  description: string;
  reward: string;
  platform: string;
  difficulty: string;
  featured?: boolean;
}

const bounties: Bounty[] = [
  {
    id: 1,
    title: 'Implement Dark Mode Toggle',
    description: 'Add a dark mode toggle to the user dashboard with smooth transitions',
    reward: '$500',
    platform: 'Gitcoin',
    difficulty: 'Intermediate',
    featured: true,
  },
  {
    id: 2,
    title: 'Fix API Rate Limiting',
    description: 'Optimize API endpoints to handle higher request volumes',
    reward: '$300',
    platform: 'Algora',
    difficulty: 'Beginner',
  },
  {
    id: 3,
    title: 'Build Mobile App UI',
    description: 'Design and implement responsive mobile UI components',
    reward: '$800',
    platform: 'IssueHunt',
    difficulty: 'Advanced',
    featured: true,
  },
  {
    id: 4,
    title: 'Add User Authentication',
    description: 'Implement secure user login and registration system',
    reward: '$400',
    platform: 'Polar',
    difficulty: 'Intermediate',
  },
  {
    id: 5,
    title: 'Database Optimization',
    description: 'Improve database queries for better performance',
    reward: '$600',
    platform: 'Opire',
    difficulty: 'Advanced',
  },
  {
    id: 6,
    title: 'Write Unit Tests',
    description: 'Add comprehensive unit tests for existing codebase',
    reward: '$250',
    platform: 'Gitcoin',
    difficulty: 'Beginner',
  },
];

export default function ProductCards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-slate-300">Available Bounties</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">Explore </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400">
              Open Bounties
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Find the perfect bounty to work on and earn rewards from top platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bounties.map((bounty) => (
            <Card
              key={bounty.id}
              className="bg-slate-900/50 border-slate-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 group backdrop-blur-sm"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                    <Package className="w-6 h-6 text-pink-400" />
                  </div>
                  {bounty.featured && (
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {bounty.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{bounty.platform} • {bounty.difficulty}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {bounty.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    {bounty.reward}
                  </span>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
                >
                  Claim Bounty
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

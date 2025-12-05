'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Trophy, Medal, Award, Github, Star, GitFork, Code } from 'lucide-react';

interface Hunter {
  id: number;
  name: string;
  username: string;
  avatar: string;
  contributions: number;
  repositories: number;
  stars: number;
  rank: number;
}

const dummyHunters: Hunter[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    username: 'alexdev',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    contributions: 2450,
    repositories: 87,
    stars: 12500,
    rank: 1,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    username: 'sarahcodes',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    contributions: 2100,
    repositories: 64,
    stars: 9800,
    rank: 2,
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    username: 'mikerocks',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    contributions: 1850,
    repositories: 52,
    stars: 8200,
    rank: 3,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    username: 'emmaworks',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    contributions: 1650,
    repositories: 45,
    stars: 7100,
    rank: 4,
  },
  {
    id: 5,
    name: 'David Kim',
    username: 'davidk',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    contributions: 1420,
    repositories: 38,
    stars: 6500,
    rank: 5,
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-yellow-400" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />;
    default:
      return <span className="text-2xl font-bold text-slate-400">#{rank}</span>;
  }
};

export default function Leaderboard() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Trophy className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-slate-300">Leaderboard</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Top Open Source </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400">
              Hunters
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Celebrating the most active contributors in the open source community
          </p>
        </div>

        <div className="space-y-4">
          {dummyHunters.map((hunter, index) => (
            <Card
              key={hunter.id}
              className={`bg-slate-900/50 border-slate-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group backdrop-blur-sm animate-fade-in ${
                hunter.rank <= 3 ? 'ring-2 ring-yellow-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(hunter.rank)}
                    </div>
                    <img
                      src={hunter.avatar}
                      alt={hunter.name}
                      className="w-16 h-16 rounded-full border-2 border-slate-700 group-hover:border-yellow-500/50 transition-colors"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {hunter.name}
                      </h3>
                      <Badge className="bg-slate-700 text-slate-300 border-slate-600">
                        @{hunter.username}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span>{hunter.contributions.toLocaleString()} contributions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        <span>{hunter.repositories} repos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span>{hunter.stars.toLocaleString()} stars</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                      {hunter.contributions.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-500">points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

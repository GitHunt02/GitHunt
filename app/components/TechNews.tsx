'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Newspaper, TrendingUp, Clock, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  source: string;
  timeAgo: string;
  url: string;
}

const dummyNews: NewsItem[] = [
  {
    id: 1,
    title: 'OpenAI Releases GPT-4 Turbo with Enhanced Performance',
    summary: 'The latest iteration of GPT-4 offers significant improvements in speed and accuracy, revolutionizing AI development workflows.',
    category: 'AI',
    source: 'TechCrunch',
    timeAgo: '2 hours ago',
    url: 'https://techcrunch.com',
  },
  {
    id: 2,
    title: 'Rust Programming Language Hits 1 Million Active Developers',
    summary: 'Rust continues its rapid growth as developers embrace memory safety and performance for system-level programming.',
    category: 'Open Source',
    source: 'GitHub Blog',
    timeAgo: '4 hours ago',
    url: 'https://github.blog',
  },
  {
    id: 3,
    title: 'New Machine Learning Framework Simplifies Model Deployment',
    summary: 'A breakthrough framework reduces the complexity of deploying ML models to production environments.',
    category: 'AI',
    source: 'MIT Technology Review',
    timeAgo: '6 hours ago',
    url: 'https://technologyreview.com',
  },
  {
    id: 4,
    title: 'Linux Kernel 6.5 Released with Major Security Updates',
    summary: 'The latest kernel version includes critical security patches and performance optimizations.',
    category: 'Open Source',
    source: 'Linux Foundation',
    timeAgo: '8 hours ago',
    url: 'https://linuxfoundation.org',
  },
  {
    id: 5,
    title: 'AI-Powered Code Review Tools Gain Popularity',
    summary: 'Developers are increasingly adopting AI assistants for automated code reviews and bug detection.',
    category: 'AI',
    source: 'DevOps Digest',
    timeAgo: '12 hours ago',
    url: 'https://devopsdigest.com',
  },
  {
    id: 6,
    title: 'Blockchain Technology Advances in Open Source Projects',
    summary: 'New decentralized applications are pushing the boundaries of blockchain technology in open source.',
    category: 'Open Source',
    source: 'CoinDesk',
    timeAgo: '1 day ago',
    url: 'https://coindesk.com',
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI':
      return 'bg-purple-500';
    case 'Open Source':
      return 'bg-pink-500';
    default:
      return 'bg-slate-500';
  }
};

export default function TechNews() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">Latest News</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Tech </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400">
              Updates
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay informed with the latest developments in AI, open source, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyNews.map((news, index) => (
            <Card
              key={news.id}
              className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <Badge className={`${getCategoryColor(news.category)} text-white border-0`}>
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{news.timeAgo}</span>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {news.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {news.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{news.source}</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Bounty {
  id: number;
  title: string;
  description: string;
  reward: number;
  difficulty: string;
  language: string;
  platform: string;
  tags: string[];
  timeEstimate: string;
  applicants: number;
}

export default function BountiesPage() {
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [sortBy, setSortBy] = useState('reward');

  // Fetch bounties from API
  useEffect(() => {
    const fetchBounties = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/bounties');
        const data = await response.json();
        setBounties(data.bounties || []);
      } catch (error) {
        console.error('Failed to fetch bounties:', error);
        setBounties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBounties();
    // Refresh bounties every 30 seconds for real-time updates
    const interval = setInterval(fetchBounties, 30000);
    return () => clearInterval(interval);
  }, []);

  // Get unique languages
  const languages = [
    'All',
    ...Array.from(new Set(bounties.map((b) => b.language))),
  ];

  // Filter and sort bounties
  const filteredBounties = bounties
    .filter((bounty) => {
      const matchesSearch =
        searchQuery === '' ||
        bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bounty.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bounty.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDifficulty =
        selectedDifficulty === 'All' || bounty.difficulty === selectedDifficulty;

      const matchesLanguage =
        selectedLanguage === 'All' || bounty.language === selectedLanguage;

      return matchesSearch && matchesDifficulty && matchesLanguage;
    })
    .sort((a, b) => {
      if (sortBy === 'reward') {
        return b.reward - a.reward;
      } else {
        return a.applicants - b.applicants;
      }
    });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Hard':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            GitHunt
          </Link>
          <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform">
            Post a Bounty
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              Discover{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Bounties
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Find the perfect coding challenges and earn money
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search bounties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                <option value="All">All Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === 'All' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count and Sort */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              {loading ? (
                'Loading bounties...'
              ) : (
                <>
                  <span className="text-2xl font-bold text-white">
                    {filteredBounties.length}
                  </span>{' '}
                  bounties found
                </>
              )}
            </p>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <option value="reward">Highest Reward</option>
              <option value="applicants">Fewest Applicants</option>
            </select>
          </div>

          {/* Bounties Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : filteredBounties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No bounties found</p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBounties.map((bounty) => (
                <div
                  key={bounty.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Bounty Content */}
                  <div className="space-y-4">
                    {/* Title and Difficulty */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                        {bounty.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          getDifficultyColor(bounty.difficulty)
                        } whitespace-nowrap`}
                      >
                        {bounty.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {bounty.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {bounty.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                      <div>
                        <span className="text-gray-500">Language:</span>
                        <br />
                        <span className="text-white">{bounty.language}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Platform:</span>
                        <br />
                        <span className="text-white">{bounty.platform}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Time:</span>
                        <br />
                        <span className="text-white">{bounty.timeEstimate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Applicants:</span>
                        <br />
                        <span className="text-white">{bounty.applicants}</span>
                      </div>
                    </div>

                    {/* Reward and Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-sm text-gray-400">Reward</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                          ${bounty.reward}
                        </p>
                      </div>
                      <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
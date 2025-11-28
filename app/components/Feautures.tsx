import React from 'react'

const Features = () => {
  return (
    
    <div className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-white mb-4">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            GitHunt
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          The most advanced platform for developer bounties
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Feature 1 - AI Matching */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
          <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all group-hover:transform group-hover:scale-105">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition" />
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              AI-Powered Matching
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our AI analyzes your GitHub profile, skills, and success
              rate to recommend bounties you're most likely to complete
              successfully.
            </p>
            <div className="mt-6 flex items-center text-purple-400 text-sm font-semibold">
              <span>Learn more</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Feature 2 - Aggregated Bounties */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
          <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all group-hover:transform group-hover:scale-105">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition" />
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              All Platforms Unified
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Browse 5,000+ bounties from Algora, Gitcoin, IssueHunt,
              Opire, and Polar in one sleek dashboard. Save hours of
              searching.
            </p>
            <div className="mt-6 flex items-center text-blue-400 text-sm font-semibold">
              <span>Explore bounties</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Feature 3 - Learn & Earn */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
          <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all group-hover:transform group-hover:scale-105">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition" />
              <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Learn While You Earn
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Access tutorials, video courses, and mentorship programs.
              Level up your skills and increase your earning potential.
            </p>
            <div className="mt-6 flex items-center text-green-400 text-sm font-semibold">
              <span>Start learning</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Features
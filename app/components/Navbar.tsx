import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* Navbar Background Effects */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-75 animate-pulse" />
              <div className="relative bg-black px-4 py-2 rounded-lg border border-purple-500/50">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  GitHunt
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/bounties"
              className="relative text-gray-300 hover:text-white transition group"
            >
              <span>Bounties</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all" />
            </a>
            <a
              href="#"
              className="relative text-gray-300 hover:text-white transition group"
            >
              <span>Learn</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all" />
            </a>
            <a
              href="#"
              className="relative text-gray-300 hover:text-white transition group"
            >
              <span>Marketplace</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* Buttons removed as requested */}
          </div>
        </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar

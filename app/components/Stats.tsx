import React from 'react'

const Stats = () => {
  return (
   
    <div className="relative py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-20" />
        <div className="relative bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                5K+
              </div>
              <div className="text-gray-300 text-lg font-semibold">
                Active Bounties
              </div>
              <div className="text-gray-500 text-sm">Updated daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                $2.5M+
              </div>
              <div className="text-gray-300 text-lg font-semibold">
                Total Rewards
              </div>
              <div className="text-gray-500 text-sm">
                Paid to developers
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-gray-300 text-lg font-semibold">
                Developers Earning
              </div>
              <div className="text-gray-500 text-sm">
                Join the community
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Stats
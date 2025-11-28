'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

const Hero = () => {
  return (
    
    <div className="relative pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">
            🚀 Join 10,000+ developers earning today
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Turn Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Code Into Cash
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          AI-powered bounty matching. Find opportunities that match your
          skills,
          <br className="hidden md:block" />
          learn new technologies, and earn money solving real-world
          problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg group-hover:blur-xl transition opacity-75" />
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition group-hover:scale-105">
              Explore Bounties
            </div>
          </button>
          <button className="relative group border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition" onClick={() => {
            console.log('GitHub sign in clicked');
            signIn("github").catch((error) => {
              console.error('Sign in error:', error);
            });
          }}>
            <div className="relative text-white px-10 py-5 rounded-xl font-bold text-lg transition group-hover:scale-105">
              Connect GitHub
            </div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No fees to browse</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Secure payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>AI-powered matching</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Hero
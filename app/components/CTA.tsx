import React from 'react'
import { signIn } from 'next-auth/react';
const CTA = () => {
  return (
     
     <div className="relative py-32 px-6">
     <div className="max-w-4xl mx-auto text-center space-y-8">
       <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
         Ready to{' '}
         <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
           Start Earning?
         </span>
       </h2>
       <p className="text-xl text-gray-400 max-w-2xl mx-auto">
         Join thousands of developers who are already making money by
         solving coding challenges
       </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
         {/* This CTA should probably link to /bounties or the Connect GitHub flow */}
         <button className="relative group" onClick={() => signIn("github")}>
           <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-lg group-hover:blur-xl transition opacity-75" />
           <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition group-hover:scale-105">
             Create Free Account
           </div>
         </button>
       </div>
     </div>
   </div>

  )
}

export default CTA
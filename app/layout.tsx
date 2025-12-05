import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Import the AuthProvider component
import AuthProvider from './components/AuthProvider'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHunt', 
  description: 'Find your next bounty!', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the children with AuthProvider */}
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
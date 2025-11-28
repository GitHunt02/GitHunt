'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

// Define the shape of the props
interface AuthProviderProps {
  children: React.ReactNode;
}

// SessionProvider MUST be used in a Client Component
export default function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
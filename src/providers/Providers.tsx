"use client"
import { AuthProvider, LinksProvider } from '@/context'
import { FC } from 'react';

interface ProvidersProps {
    children: React.ReactNode;   
}

export const Providers:FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <LinksProvider>
        { children }
      </LinksProvider>
    </AuthProvider>
  )
}
"use client"
import { AuthProvider } from '@/context'
import { FC } from 'react';

interface ProvidersProps {
    children: React.ReactNode;   
}

export const Providers:FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
        { children }
    </AuthProvider>
  )
}
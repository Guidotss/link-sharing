"use client"
import { Links, User } from '@/interfaces';
import { createContext } from 'react';


interface AuthContextProps {
    user: User | null;
    login: ( email: string, password: string ) => Promise<boolean>;
    register: (email: string, passwod: string) => Promise<boolean>
    updateUserImage: (file: File) => Promise<void>; 
    updateUserInfo: ( firstName: string, lastName: string, email?: string ) => Promise<void>;
    logout: () => boolean;
}


export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
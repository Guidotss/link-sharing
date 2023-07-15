"use client"
import { User } from '@/interfaces';
import { createContext } from 'react';


interface AuthContextProps {
    user: User | null;
    login: ( email: string, password: string ) => Promise<boolean>;
    register: (email: string, passwod: string) => Promise<boolean>
    logout: () => boolean;
}


export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
"use client"

import { useReducer, FC } from "react";
import { AuthContext, authReducer } from ".";
import { User } from "@/interfaces";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthState {
  user: User | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.ok) {
        Cookies.set("token", data.token);
        const { user } = data as { user: User };
        dispatch({
          type: "[AUTH] - login",
          payload: user,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "[AUTH] - logout",
      });
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    dispatch({
      type: "[AUTH] - logout",
    });
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

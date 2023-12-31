"use client";

import { useReducer, FC, useEffect } from "react";
import { AuthContext, authReducer } from ".";
import { User } from "@/interfaces";
import Cookies from "js-cookie";
import { uploadUserImage } from "@/helpers";

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

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;
    revalidate();
  }, []);

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
        Cookies.set("userId", data.user.id);
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
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
      return false;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (data.ok) {
        Cookies.set("token", data.token);
        Cookies.set("userId", data.newUser.id);
        const { newUser } = data as { newUser: User };
        dispatch({
          type: "[AUTH] - login",
          payload: newUser,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
      return false;
    }
  };

  const revalidate = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        dispatch({
          type: "[AUTH] - logout",
        });
      }
      const response = await fetch("/api/auth/revalidate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!data.ok) {
        Cookies.remove("token");
        dispatch({
          type: "[AUTH] - logout",
        });
      }

      const { user } = data as { user: User };
      dispatch({
        type: "[AUTH] - login",
        payload: user,
      });
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
    }
  };

  const logout = () => {
    Cookies.remove("token");
    dispatch({
      type: "[AUTH] - logout",
    });
    return true;
  };

  const updateUserImage = async (file: File) => {
    const token = Cookies.get("token");
    if (!token) {
      Cookies.remove("token");
      dispatch({
        type: "[AUTH] - logout",
      });
    }

    const url = await uploadUserImage(file);
    const response = await fetch(
      "/api/auth/update-image",
      {
        method: "PUT",
        body: JSON.stringify({ image: url }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (data.ok) {
      dispatch({
        type: "[AUTH] - Update_user_image",
        payload: data.image,
      });
    }
  };

  const updateUserInfo = async (
    firstName?: string,
    lastName?: string,
    email?: string
  ) => {
    const token = Cookies.get("token");
    if (!token) {
      dispatch({
        type: "[AUTH] - logout",
      });
    }
    if (!firstName || !lastName) return;

    if (email) {
      const response = await fetch("/api/auth/update-user", {
        method: "PUT",
        body: JSON.stringify({ firstName, lastName, email }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.ok) {
        const { firstName, lastName, email } = data as {
          firstName: string;
          lastName: string;
          email: string;
        };
        dispatch({
          type: "[AUTH] - Update_user_info",
          payload: { firstName, lastName, email },
        });
      }
    }
    const response = await fetch("/api/auth/update-user", {
      method: "PUT",
      body: JSON.stringify({ firstName, lastName }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.ok) {
      const { firstName, lastName } = data as {
        firstName: string;
        lastName: string;
      };
      dispatch({
        type: "[AUTH] - Update_user_info",
        payload: { firstName, lastName },
      });
    }

    console.log(data);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
        logout,
        register,
        updateUserImage,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

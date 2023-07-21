import { AuthState } from ".";
import { User } from "@/interfaces";

type AuthActionType =
  | { type: "[AUTH] - login"; payload: User }
  | { type: "[AUTH] - logout" }
  | { type: "[AUTH] - Update_user_image"; payload: string }
  | {
      type: "[AUTH] - Update_user_info";
      payload: { firstName: string; lastName: string; email?: string };
    };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[AUTH] - login":
      return {
        ...state,
        user: action.payload,
      };
    case "[AUTH] - logout":
      return {
        ...state,
        user: null,
      };
    case "[AUTH] - Update_user_image":
      return {
        ...state,
        user: {
          ...state.user!,
          image: action.payload,
        },
      };
    case "[AUTH] - Update_user_info":
      return {
        ...state,
        user: {
          ...state.user!,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email || state.user!.email,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

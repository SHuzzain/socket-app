import { create } from "zustand";
import { UserType } from "../schema";

type AuthState = {
  user: UserType | null;
  token: string | null;
  setUser: (user: UserType, token?: string) => void;
  logout: () => void;
};

const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user, token) =>
    set(() => ({
      user,
      token,
    })),
  logout: () =>
    set(() => ({
      user: null,
      token: null,
    })),
}));

export default useAuth;

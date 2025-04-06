import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { GetUserType } from "../schema";

type AuthState = {
  user: GetUserType | null;
  isAuth: boolean;
  setUser: (user: GetUserType) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      setUser: (user) =>
        set(() => ({
          user,
          isAuth: true,
        })),

      logout: () =>
        set(() => ({
          user: null,
          isAuth: false,
        })),
    }),
    {
      name: "userToken",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.user?.token }),
    }
  )
);

export default useAuthStore;

import { io as ClientIO, Socket } from "socket.io-client";
import { create } from "zustand";

import { env } from "@/config/env";
import useAuth from "@/features/auth/hooks/use-auth";

type SocketStore = {
  socket: Socket | null;
  isConnected: boolean;
  initSocket: () => void;
  connectionCount: number;
};

export const useSocketStore = create<SocketStore>((set) => ({
  socket: null,
  isConnected: false,
  connectionCount: 0,

  initSocket: () => {
    const user = useAuth.getState().user;

    if (!user) {
      console.warn("No user ID found, socket not initialized.");
      return;
    }

    const userId = user.id;

    const socketInstance = ClientIO(env.VITE_API_BASE_URL, {
      path: env.VITE_SOCKET_URL,
      addTrailingSlash: false,
      query: {
        userId,
      },
    });

    socketInstance.on(
      "user-connection-count",
      ({ count }: { count: number }) => {
        set({ connectionCount: count });
        console.log("🟢 Active connections for this user:", count);
      }
    );

    socketInstance.on("connect", () => {
      set({ isConnected: true });
    });

    socketInstance.on("disconnect", () => {
      set({ isConnected: false });
    });

    set({ socket: socketInstance });
  },
}));

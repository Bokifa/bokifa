import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const isServer = typeof window === 'undefined';

export const useUserStorage = create(
    persist(
        (set) => ({
            accessToken: null,
            user: null,

            setAccessToken: (token) => set({ accessToken: token }),
            setUser: (user) => set({ user }),

            logout: () => set({ accessToken: null, user: null }),
        }),
        {
            name: 'user-storage',
            storage: isServer ? undefined : localStorage,
        }
    )
);

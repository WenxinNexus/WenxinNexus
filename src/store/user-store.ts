import { create } from 'zustand';

interface UserState {
  uid: string | null;
  email: string | null;
  role: 'student' | 'teacher' | 'admin' | null;
  displayName: string | null;
  isLoading: boolean;
  
  setUser: (user: Partial<UserState>) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  uid: null,
  email: null,
  role: null,
  displayName: null,
  isLoading: true, 

  setUser: (user) => set((state) => ({ ...state, ...user, isLoading: false })),
  clearUser: () => set({ uid: null, email: null, role: null, displayName: null, isLoading: false }),
}));
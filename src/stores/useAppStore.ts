import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  user: User | null;
  isLoading: boolean;
  theme: 'light' | 'dark';
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  toggleTheme: () => void;
  reset: () => void;
}

const initialState = {
  user: null,
  isLoading: false,
  theme: 'light' as const,
};

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      ...initialState,
      
      setUser: (user) => set({ user }, false, 'setUser'),
      
      setLoading: (isLoading) => set({ isLoading }, false, 'setLoading'),
      
      toggleTheme: () => 
        set(
          (state) => ({ 
            theme: state.theme === 'light' ? 'dark' : 'light' 
          }), 
          false, 
          'toggleTheme'
        ),
      
      reset: () => set(initialState, false, 'reset'),
    }),
    {
      name: 'app-store',
    }
  )
);

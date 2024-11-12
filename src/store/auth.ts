import {AuthState, User} from '@/store/type/auth.ts';
import {create} from 'zustand';

const initialUser = {
  id: '',
  name: '',
  lastName: '',
  email: '',
};

const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  user: initialUser,
  login: (user: User) => {
    set({isAuthenticated: true, user});
  },
  logout: () => {
    set({isAuthenticated: false, user: initialUser});
  },
}));
export default useAuthStore;

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

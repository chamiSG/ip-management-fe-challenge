
declare module "@/contexts/AuthContext" {
  export interface AuthContextValue {
    accessToken: any;
    register: (s: any) => void
    loginAuth: (s: any) => void;
    logoutAuth: () => void;
  }
  export const AuthContext: React.Context<AuthContextValue>;
}

import React from "react";
import { AuthContextType } from "../types/types.d";

export const AuthContext = React.createContext<AuthContextType | null>(null);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [showLeftMenu, setShowLeftMenu] = React.useState(false);
  let value = { showLeftMenu, setShowLeftMenu };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

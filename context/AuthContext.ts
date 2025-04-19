import React, { useState, createContext, useContext, ReactNode } from "react";

// Definimos la interfaz para el contexto
interface AuthContextType {
  auth: any; // Cambia "any" por el tipo específico de tu usuario si lo conoces
  login: (userData: any) => void;
  logout: () => void;
}

// Creamos el contexto con un valor inicial vacío
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<any>(undefined);

  const login = (userData: any) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext: AuthContextType = {
    auth,
    login,
    logout,
  };

return);
}

// Hook para usar el contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
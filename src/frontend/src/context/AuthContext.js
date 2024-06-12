import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Criação do contexto de autenticação
const AuthContext = createContext({});

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  // Estado de autenticação inicial com idUser, idCargo e idOng nulos
  const [auth, setAuth] = useState({ idUser: null, idRole: null, idOng: null });
  const navigate = useNavigate();

  const login = (idUser, idCargo, idOng) => {
    setAuth({ idUser, idCargo, idOng });
  };

  // Retorna o contexto de autenticação com o estado de autenticação e a função de login
  return (
    <AuthContext.Provider value={{ ...auth, login }}>
      {children} {/* Renderiza os componentes filhos */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useEffect, useState } from 'react';

export const LoginUserContext = createContext();

export const useLoginUser = () => useContext(LoginUserContext);

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(() => {
    const stored = localStorage.getItem('loginUser');
    return stored ? JSON.parse(stored) : null;
  });
  useEffect(() => {
    const stored = localStorage.getItem('loginUser');
    if (stored) {
      setLoginUser(JSON.parse(stored));
    }
  }, []);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
import React, { createContext, useContext } from 'react';

export const LoginUserContext = createContext();

export const useLoginUser = () => useContext(LoginUserContext);

export const LoginUserProvider = ({ children }) => {
  const loginUser = { username: 'Admin', email: 'admin@ihuza.com' };
  return (
    <LoginUserContext.Provider value={loginUser}>
      {children}
    </LoginUserContext.Provider>
  );
};
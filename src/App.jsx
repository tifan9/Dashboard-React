import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import { ProductProvider } from './context/ProductContext';
import { LoginUserProvider } from './context/LoginUserContext';


function App() {
  
  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
        <ProductProvider>
          <div className="min-h-screen">
          <Dashboard />
        </div>
        </ProductProvider>
      </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
    
  );
}

export default App;
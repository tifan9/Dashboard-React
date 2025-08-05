import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import { ProductProvider } from './context/ProductContext';
import { LoginUserProvider } from './context/LoginUserContext';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import { CategoryProvider } from './context/CategoryContext';


function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
        <ProductProvider>
          <CategoryProvider>
            <AppRoutes />
          </CategoryProvider>
        </ProductProvider>
      </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
    </BrowserRouter>
    
    
  );
}

export default App;
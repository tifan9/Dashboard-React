import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext'; // Your existing UserProvider
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <UserProvider>
        <div className="min-h-screen transition-colors duration-200">
          <Dashboard />
        </div>
      </UserProvider>
    
  );
}

export default App;
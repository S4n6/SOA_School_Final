import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Header from './components/navbar';
import { useState } from 'react';
import Layout from './components/layout';
import { createTheme } from '@mui/material';
import getLPTheme from './utils/getLPTheme';
import Home from './pages/home';
import Introduction from './pages/introduction';

function App() {
  const [mode, setMode] = useState('light');
  const [showCustomTheme, setShowCustomTheme] = useState(false);
  
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" 
          element={<Layout 
            mode={mode} 
            toggleColorMode={toggleColorMode} 
            showCustomTheme={showCustomTheme}> <Introduction /> </Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
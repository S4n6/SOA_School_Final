import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
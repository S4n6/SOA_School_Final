import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { useState } from "react";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Layout from "./components/layout/layout";

function App() {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(false);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <Layout
              mode={mode}
              toggleColorMode={toggleColorMode}
              showCustomTheme={showCustomTheme}
            >
              {" "}
              <Home />{" "}
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout
              mode={mode}
              toggleColorMode={toggleColorMode}
              showCustomTheme={showCustomTheme}
            >
              {" "}
              <Introduction />{" "}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

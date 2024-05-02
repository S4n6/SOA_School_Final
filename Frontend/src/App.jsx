import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { useState } from "react";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Layout from "./components/layout/layout";
import LoginButton from "./components/test";
import Watching from "./pages/watching";
import AllFilm from "./pages/allFilms";
import Dashboard from "./pages/admin";

function App() {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);

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

        <Route
          path="/video"
          element={
            <Layout
              mode={mode}
              toggleColorMode={toggleColorMode}
              showCustomTheme={showCustomTheme}
            >
              {" "}
              <Watching />{" "}
            </Layout>
            // <Watching/>
          }
        />
        <Route path="/login" element={<LoginButton />} />

        <Route
          path="/all"
          element={
            <Layout
              mode={mode}
              toggleColorMode={toggleColorMode}
              showCustomTheme={showCustomTheme}
            >
              {" "}
              <AllFilm />{" "}
            </Layout>
            // <Watching/>
          }
        />

        <Route
          path="/admin"
          element={
            <Dashboard/>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;

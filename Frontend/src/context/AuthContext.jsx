import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenCookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("access_token="));

    if (tokenCookie) {
      const token = JSON.parse(decodeURIComponent(tokenCookie.split("=")[1]));
      console.log("tokenhfhgfhf", token);
      setUser(token?.userId);
    }
  }, []);

  const login = (user) => {
    setUser(user);
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

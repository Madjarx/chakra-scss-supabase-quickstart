import { createContext, useState } from "react";

// Initial context
const AdminContext = createContext({
  isAuthenticated: false,
  toggleAuthenticated: () => {}
});

function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggler function
  const toggleAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <>
      <AdminContext.Provider value={{ isAuthenticated, toggleAuthenticated }}>
        {children}
      </AdminContext.Provider>
    </>
  );
}

export { AdminContext, AdminProvider };

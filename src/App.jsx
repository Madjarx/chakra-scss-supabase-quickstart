import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages imports
import { Login, Dashboard } from "./pages";

// Outlet imports
import { UserManagement, Statistics } from "./components";

// Utilities imports
import { AdminContext } from "./context/adminContext";
import { AdminProvider } from "./context/adminContext";

// Components & Chakra imports
import { Button } from "@chakra-ui/react";

function App() {
  // const { isAuthenticated, toggleAuthenticated } = useContext(AdminContext);
  const isAuthenticated = localStorage.getItem('admin')

  return (
    <>
      <Router>
        <Routes>
          {/* <Route
            exact
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Login />}
            /> */}
            <Route path="/" element={<Dashboard/>}>
              <Route path="" element={<Statistics/>} />
              <Route path="users" element={<UserManagement />}/>
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

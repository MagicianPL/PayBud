import "./App.css";
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import theme from "./theme/theme";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Homepage from "./pages/Homepage/Homepage";
import SignUpForm from './pages/SignUpForm/SignUpForm';
import SignInForm from "./pages/SignInForm/SignInForm";
import Account from "./pages/Account/Account";
import ScrollToTop from "./components/ScrollToTop";
import UserContext from "./context/UserContext";
import RequireAuth from "./ProtectedRoutes/RequireAuth";
import RequireNonAuth from './ProtectedRoutes/RequireNonAuth';
import React from "react";

function App() {
  //User from localStorage || undefined
  const [user, setUser] = useState(
    window.localStorage.getItem("paylink_user") ?
    JSON.parse(window.localStorage.getItem("paylink_user") || '{}') :
    undefined
  );

  return (
    <ThemeProvider theme={theme}>
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
      <HashRouter>
      <ScrollToTop />
        <TopNavigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<RequireNonAuth><SignUpForm /></RequireNonAuth>} />
          <Route path="/signin" element={<RequireNonAuth><SignInForm /></RequireNonAuth>} />
          <Route path="/account/*" element={<RequireAuth><Account /></RequireAuth>} />
        </Routes>
      </HashRouter>
      </div>
    </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

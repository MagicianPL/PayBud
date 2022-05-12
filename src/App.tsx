import "./App.css";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <HashRouter>
      <ScrollToTop />
        <TopNavigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
      </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

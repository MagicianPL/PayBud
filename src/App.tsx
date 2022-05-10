import "./App.css";
import { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Homepage from "./pages/Homepage/Homepage";
import SignUpForm from './pages/SignUpForm/SignUpForm';
import SignInForm from "./pages/SignInForm/SignInForm";
import Account from "./pages/Account/Account";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopNavigation />
        <Account />
        <Homepage />
        <SignUpForm />
  <SignInForm />
      </div>
    </ThemeProvider>
  );
}

export default App;

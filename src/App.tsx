import "./App.css";
import { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopNavigation />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;

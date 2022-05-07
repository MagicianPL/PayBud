import "./App.css";
import { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import Test from "./components/Test";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import List from "./components/List";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [themeMode, setThemeMode] = useState(dark);

  const toggleTheme = () => {
    setThemeMode(themeMode.title === "light" ? dark : light);                 
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header 
        themeMode={themeMode}
        toggleTheme={toggleTheme}/>
      <List />
    </ThemeProvider>
  );
}

export default App;
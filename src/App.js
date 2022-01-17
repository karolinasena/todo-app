import React from 'react';
import usePersistedTheme from './utils/usePersistedTheme';
import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import List from "./components/List";
import { GlobalStyle } from "./styles/GlobalStyle";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import AppProvider from './AppContext/Provider';

function App() {
  const [themeMode, setThemeMode] = usePersistedTheme('theme', dark);

  const toggleTheme = () => {
    setThemeMode(themeMode.title === "light" ? dark : light);
  }

  return (
    <AppProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header
          themeMode={themeMode}
          toggleTheme={toggleTheme}
        />
        <List />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
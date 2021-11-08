import React from 'react';
import Header from "./components/Header";
import List from "./components/List";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <List />
    </div>
  );
}

export default App;

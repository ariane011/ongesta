import React from "react";
import "antd/dist/antd.css";
import { Header } from "./componentes/Header";
import { HomePage } from "./componentes/HomePage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

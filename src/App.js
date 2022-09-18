import React from "react";
import Nav from "./navigation/Nav";
import Main from "./view/Main";
import Info from "./view/Info";

import "./index.css"

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Info />
    </div>
  );
}

export default App;
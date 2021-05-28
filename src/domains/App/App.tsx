import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StyleWrapper from "./App.style";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <StyleWrapper>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </StyleWrapper>
  );
}

export default App;

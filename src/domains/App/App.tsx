import React from "react";
import StyleWrapper from "./App.style";
import Layout from "containers/Layout";
import Category from "components/Category";

function App() {
  return (
    <StyleWrapper>
      <Layout>
        <Category />
      </Layout>
    </StyleWrapper>
  );
}

export default App;

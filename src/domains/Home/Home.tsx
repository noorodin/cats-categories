import React, { FC, memo } from "react";
import StyleWrapper from "./Home.style";
import Layout from "containers/Layout";

const Home: FC = () => {
  return (
    <StyleWrapper>
      <Layout>
        <div className="content">
          <h2>Home Page</h2>
          <h2>Please select a category.</h2>
        </div>
      </Layout>
    </StyleWrapper>
  );
};

export default memo(Home);

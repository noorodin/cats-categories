import React, { FC, memo } from "react";
import StyleWrapper from "./Home.style";
import CommonInterface from "containers/CommonInterface";

const Home: FC = () => {
  return (
    <StyleWrapper>
      <CommonInterface>
        <div className="content">
          <h2>Home Page</h2>
          <h2>Please select a category.</h2>
        </div>
      </CommonInterface>
    </StyleWrapper>
  );
};

export default memo(Home);

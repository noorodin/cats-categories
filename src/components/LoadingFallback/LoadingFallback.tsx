import React, { FC, memo } from "react";
import StyleWrapper from "./LoadingFallback.style";

const LoadingFallback: FC = () => {
  return (
    <StyleWrapper>
      <span>Loading ...</span>
    </StyleWrapper>
  );
};

export default memo(LoadingFallback);

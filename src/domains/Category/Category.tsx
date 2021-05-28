import React, { FC, memo } from "react";
import StyleWrapper from "./Category.style";
import CommonInterface from "containers/CommonInterface";
import ImagesList from "components/ImagesList";

const Category: FC = () => {
  return (
    <StyleWrapper>
      <CommonInterface>
        <ImagesList />
      </CommonInterface>
    </StyleWrapper>
  );
};

export default memo(Category);

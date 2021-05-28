import React, { FC, memo } from "react";
import StyleWrapper from "./Category.style";
import Layout from "containers/Layout";
import CategoryList from "components/CategoryList";

const Category: FC = () => {
  return (
    <StyleWrapper>
      <Layout>
        <CategoryList />
      </Layout>
    </StyleWrapper>
  );
};

export default memo(Category);

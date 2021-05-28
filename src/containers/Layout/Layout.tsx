import Sidebar from "components/Sidebar";
import React, { memo, ReactNode } from "react";
import StyleWrapper from "./Layout.style";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyleWrapper>
      <Sidebar />
      {children}
    </StyleWrapper>
  );
};

export default memo(Layout);

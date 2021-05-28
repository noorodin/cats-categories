import Sidebar from "components/Sidebar";
import React, { memo, ReactNode } from "react";
import StyleWrapper from "./CommonInterface.style";

interface LayoutProps {
  children: ReactNode;
}

const CommonInterface = ({ children }: LayoutProps) => {
  return (
    <StyleWrapper>
      <Sidebar />
      {children}
    </StyleWrapper>
  );
};

export default memo(CommonInterface);

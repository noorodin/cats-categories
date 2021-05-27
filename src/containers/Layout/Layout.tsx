import Sidebar from "components/Sidebar";
import React, { ReactNode } from "react";
import StyleWrapper from "./Layout.style";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StyleWrapper>
      <Sidebar />
      {children}
    </StyleWrapper>
  );
}

export default Layout;

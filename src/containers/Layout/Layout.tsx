import Sidebar from "components/Sidebar";
import React from "react";
import StyleWrapper from "./Layout.style";

interface LayoutProps {
  children?: React.ReactNode;
}

const menuItems = [
  { id: 5, name: "boxes" },
  { id: 15, name: "clothes" },
  { id: 4, name: "sunglasses" },
  { id: 7, name: "ties" },
];

function Layout({ children }: LayoutProps) {
  return (
    <StyleWrapper>
      <Sidebar menuItems={menuItems} />
      {children}
    </StyleWrapper>
  );
}

export default Layout;

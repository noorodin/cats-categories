import React from "react";
import StyleWrapper from "./Sidebar.style";

interface item {
  id?: Number;
  name?: String;
}

interface SidebarProps {
  menuItems: item[];
}

function Sidebar({ menuItems }: SidebarProps) {
  return (
    <StyleWrapper>
      <ul>
        {menuItems.map((item: item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </StyleWrapper>
  );
}

export default Sidebar;

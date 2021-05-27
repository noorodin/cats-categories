import React, { useEffect } from "react";
import { IMenuItem } from "types/sidebar";
import StyleWrapper from "./Sidebar.style";
import { useAppSelector, useAppDispatch } from "core/hooks";
import { sidebar, getCategoriesAsync, toggleSidebar } from "./Sidebar.slice";

interface SidebarProps {
  menuItems: IMenuItem[];
}

function Sidebar() {
  const { status, menuItems, isSidebarOpen } = useAppSelector(sidebar);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  return (
    <StyleWrapper>
      <button onClick={() => dispatch(toggleSidebar())}>+</button>
      <h1>{isSidebarOpen ? "true" : "false"}</h1>

      {status === "loading" ? (
        "loading"
      ) : (
        <ul>
          {menuItems.map((item: IMenuItem) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </StyleWrapper>
  );
}

export default Sidebar;

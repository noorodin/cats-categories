import React, { useEffect } from "react";
import { ICategory } from "types/category";
import StyleWrapper from "./Sidebar.style";
import { useAppSelector, useAppDispatch } from "core/hooks";
import { sidebar, getCategoriesAsync, toggleSidebar } from "./Sidebar.slice";
import { getCategoryAsync } from "components/Category/Category.slice";

interface SidebarProps {
  menuItems: ICategory[];
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
          {menuItems.map((item: ICategory) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </StyleWrapper>
  );
}

export default Sidebar;

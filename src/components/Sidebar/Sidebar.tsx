import React, { useEffect } from "react";
import { ICategory } from "types/category";
import StyleWrapper from "./Sidebar.style";
import { useAppSelector, useAppDispatch } from "core/hooks";
import { sidebar, getCategoriesAsync, toggleSidebar } from "./Sidebar.slice";
import { getCategoryAsync } from "components/Category/Category.slice";

function Sidebar() {
  const { status, menuItems, isSidebarOpen } = useAppSelector(sidebar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <StyleWrapper {...{ isSidebarOpen }}>
      <button className="toggle-menu" onClick={() => dispatch(toggleSidebar())}>
        {isSidebarOpen ? "-" : "+"}
      </button>

      <div className="sidebar-menu">
        {status === "loading" ? (
          "Loading ..."
        ) : (
          <>
            <h3 className="menu-title">Categories:</h3>
            <ul className="menu-items">
              {menuItems.map((item: ICategory) => (
                <li
                  key={item.name}
                  onClick={() => {
                    dispatch(getCategoryAsync(+item.id!));
                    dispatch(toggleSidebar());
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </StyleWrapper>
  );
}

export default Sidebar;

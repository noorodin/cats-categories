import React, { useEffect } from "react";
import { ICategory } from "types/category";
import StyleWrapper from "./Sidebar.style";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {
  sidebar,
  getCategoriesAsync,
  toggleSidebar,
  setIsMobile,
} from "./Sidebar.slice";
import { getCategoryAsync, category } from "components/Category/Category.slice";
import { useWindowSize } from "core/hooks/useWindowSize";

function Sidebar() {
  const { status, menuItems, isSidebarOpen, isMobile } =
    useAppSelector(sidebar);
  const { status: categoryStatus, categoryId } = useAppSelector(category);
  const dispatch = useAppDispatch();
  const [width] = useWindowSize();

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  useEffect(() => {
    const isMobile = width < 1200 ? true : false;
    dispatch(setIsMobile(isMobile));
  }, [width]);

  return (
    <StyleWrapper {...{ isSidebarOpen, isMobile }}>
      <button
        className="toggle-button"
        onClick={() => dispatch(toggleSidebar())}
      >
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
                  className={+item.id === categoryId ? "selected-item" : ""}
                  onClick={() => {
                    dispatch(getCategoryAsync([+item.id, "sidebarMenu"]));
                    isMobile && dispatch(toggleSidebar());
                  }}
                >
                  {item.name}
                  {categoryStatus === "loading" &&
                    +item.id === categoryId &&
                    " ..."}
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

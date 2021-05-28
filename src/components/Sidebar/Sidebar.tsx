import React, { FC, memo, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ICategory } from "types/category";
import StyleWrapper from "./Sidebar.style";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import {
  sidebar,
  getCategoriesAsync,
  toggleSidebarMenu,
  setIsMobile,
} from "./Sidebar.slice";
import {
  getCategoryAsync,
  category,
} from "components/ImagesList/ImagesList.slice";
import { useWindowSize } from "core/hooks/useWindowSize";

const Sidebar: FC = () => {
  const history = useHistory();
  const { status, menuItems, isSidebarMenuOpen, isMobile } =
    useAppSelector(sidebar);
  const { status: categoryStatus, categoryId } = useAppSelector(category);
  const dispatch = useAppDispatch();
  const [width] = useWindowSize();

  useEffect(() => {
    menuItems.length === 0 && dispatch(getCategoriesAsync());
  }, []);

  useEffect(() => {
    const isMobile = width < 1200 ? true : false;
    dispatch(setIsMobile(isMobile));
  }, [width]);

  const handleMenuItemClick = (item: ICategory) => {
    dispatch(getCategoryAsync([+item.id, "sidebarMenu"]));
    isMobile && dispatch(toggleSidebarMenu());
    history.push(`/category`);
  };

  return (
    <StyleWrapper {...{ isSidebarMenuOpen, isMobile }}>
      <section className="sidebar-header">
        <Link to="/">CATS WEBSITE</Link>

        <button
          className="toggle-button"
          onClick={() => dispatch(toggleSidebarMenu())}
        >
          {isSidebarMenuOpen ? "-" : "+"}
        </button>
      </section>

      <div className="sidebar-menu">
        {status === "loading" ? (
          "Loading ..."
        ) : (
          <>
            <p className="menu-title">Categories:</p>
            <ul className="menu-items">
              {menuItems.map((item: ICategory) => (
                <li
                  key={item.name}
                  className={+item.id === categoryId ? "selected-item" : ""}
                  onClick={() => handleMenuItemClick(item)}
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
};

export default memo(Sidebar);

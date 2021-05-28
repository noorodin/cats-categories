import React, { useCallback } from "react";
import StyleWrapper from "./Category.style";
import { getCategoryAsync, category } from "./Category.slice";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { ICategories } from "types/category";

function Category() {
  const { status, items, categoryId } = useAppSelector(category);
  const dispatch = useAppDispatch();

  const ItemsComponent = useCallback(() => {
    return (
      <section className="image-wrapper">
        {items.map((item: ICategories) => (
          <img key={item.id} src={item.url} alt="" />
        ))}
      </section>
    );
  }, [items]);

  return (
    <StyleWrapper>
      {items.length === 0 ? (
        <h1>
          {status === "loading"
            ? "Loading ..."
            : "Please select a category from the sidebar."}
        </h1>
      ) : (
        <div className="content">
          <ItemsComponent />
          <button
            onClick={() => dispatch(getCategoryAsync([+categoryId, "moreButton"]))}
          >
            {status === "loading" ? "Loading ..." : "More Items"}
          </button>
        </div>
      )}
    </StyleWrapper>
  );
}

export default Category;

import React, { FC, memo, useCallback } from "react";
import StyleWrapper from "./CategoryList.style";
import { getCategoryAsync, category } from "./CategoryList.slice";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { IImage } from "types/category";

const CategoryList: FC = () => {
  const { status, items, categoryId } = useAppSelector(category);
  const dispatch = useAppDispatch();

  const ItemsComponent = useCallback(() => {
    return (
      <section className="image-wrapper">
        {items.map((item: IImage) => (
          <img key={item.id} src={item.url} alt="" />
        ))}
      </section>
    );
  }, [items]);

  return (
    <StyleWrapper>
      {items.length === 0 ? (
        <h1>
          {status === "loading" ? "Loading ..." : "Please select a category."}
        </h1>
      ) : (
        <div className="content">
          <ItemsComponent />
          <button
            onClick={() =>
              dispatch(getCategoryAsync([+categoryId, "moreButton"]))
            }
          >
            {status === "loading" ? "Loading ..." : "More Items"}
          </button>
        </div>
      )}
    </StyleWrapper>
  );
};

export default memo(CategoryList);

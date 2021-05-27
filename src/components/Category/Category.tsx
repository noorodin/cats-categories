import React, { useEffect } from "react";
import StyleWrapper from "./Category.style";
import { getCategoryAsync, category } from "./Category.slice";
import { useAppDispatch, useAppSelector } from "core/hooks";
import { ICategories } from "types/category";

function Category() {
  const { status, items } = useAppSelector(category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryAsync(1));
  }, []);

  return (
    <StyleWrapper>
      {status === "loading" ? (
        "loading"
      ) : (
        <section className="image-wrapper">
          {items.map((item: ICategories) => (
            <img key={item.id} src={item.url} alt="" />
          ))}
        </section>
      )}
    </StyleWrapper>
  );
}

export default Category;

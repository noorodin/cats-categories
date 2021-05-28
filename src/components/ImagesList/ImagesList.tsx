import React, { FC, memo, useCallback } from "react";
import StyleWrapper from "./ImagesList.style";
import { getCategoryAsync, category } from "./ImagesList.slice";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { IImage } from "types/category";

const ImagesList: FC = () => {
  const { status, images, categoryId } = useAppSelector(category);
  const dispatch = useAppDispatch();

  const ItemsComponent = useCallback(() => {
    return (
      <section className="image-wrapper">
        {images.map((item: IImage) => (
          <img key={item.id} src={item.url} alt="" />
        ))}
      </section>
    );
  }, [images]);

  return (
    <StyleWrapper>
      {images.length === 0 ? (
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

export default memo(ImagesList);

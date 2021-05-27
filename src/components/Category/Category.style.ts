import styled from "styled-components";

export default styled.section`
  .image-wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;

    img {
      max-width: 100%;
    }
  }
`;

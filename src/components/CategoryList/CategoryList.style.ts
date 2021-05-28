import styled from "styled-components";

export default styled.section`
  display: flex;
  min-height: calc(100vh - 48px);
  justify-content: center;
  text-align: center;
  padding: 24px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: calc(100vh - 48px);
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }

  button {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #4cae4c;
      border-color: #5cb85c;
    }
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media only screen and (min-width: 480px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }

    img {
      max-width: 100%;
      border-radius: 8px;
      align-self: center;
      justify-self: center;

      @media only screen and (min-width: 480px) {
        width: 235px;
        height: 150px;
      }
    }
  }
`;

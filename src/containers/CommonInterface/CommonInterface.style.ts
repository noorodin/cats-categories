import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
`;

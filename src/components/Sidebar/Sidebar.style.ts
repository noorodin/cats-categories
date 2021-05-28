import styled from "styled-components";

export default styled.div`
  padding: 16px;
  background-color: #f0f0f0;

  .toggle-menu {
    display: inline-block;

    @media only screen and (min-width: 1200px) {
      display: none;
    }
  }

  .sidebar-menu {
    display: ${(props: any) =>
      props.isSidebarOpen || !props.isMobile ? "flex" : "none"};
    flex-direction: column;
    position: sticky;
    top: 16px;
  }

  .menu-title {
    margin: 12px 0px;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;

    li {
      padding: 4px 12px;
      list-style: none;
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
        background-color: #ddd;
      }
    }
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
`;

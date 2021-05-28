import styled from "styled-components";

export default styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  position: sticky;
  top: 0px;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    position: sticky;
    top: 16px;

    a {
      font-size: 21px;
      text-decoration: none;
      font-weight: bold;
      margin: 8px 0px;
    }
  }

  .toggle-button {
    display: inline-block;
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 6px 12px;
    border-radius: 4px;
    min-width: 40px;

    @media only screen and (min-width: 1200px) {
      display: none;
    }

    &:hover {
      background-color: #4cae4c;
      border-color: #5cb85c;
    }
  }

  .sidebar-menu {
    display: ${(props: any) =>
      props.isSidebarMenuOpen || !props.isMobile ? "flex" : "none"};
    flex-direction: column;
    position: sticky;
    top: 58px;
  }

  .menu-title {
    margin: 32px 0px 12px;
    font-weight: bold;
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

      &.selected-item {
        color: #5cb85c;
      }
    }
  }
`;

import sidebarReducer, {
  SidebarState,
  sidebar,
  setIsMobile,
  toggleSidebarMenu,
} from "./Sidebar.slice";

const { isSidebarMenuOpen }: any = sidebar;

describe("counter reducer", () => {
  const initialState: SidebarState = {
    menuItems: [],
    isSidebarMenuOpen: false,
    isMobile: false,
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(sidebarReducer(undefined, { type: "unknown" })).toEqual({
      menuItems: [],
      isSidebarMenuOpen: false,
      isMobile: false,
      status: "idle",
    });
  });

  it("should handle setIsMobile", () => {
    const actual = sidebarReducer(initialState, setIsMobile(false));
    expect(actual.isMobile).toBeFalsy();
  });

  it("should handle toggleSidebarMenu", () => {
    const actual = sidebarReducer(initialState, toggleSidebarMenu());
    expect(actual.isSidebarMenuOpen).toEqual(!isSidebarMenuOpen);
  });
});

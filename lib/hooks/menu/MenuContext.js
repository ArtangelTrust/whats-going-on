import { createContext } from "react";

const MenuContext = createContext({
  showMenu: null,
  setShowMenu: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
  menuItems: null,
  setMenuItems: () => {
    throw Error("You forgot to wrap this in a Provider object");
  }
});

export default MenuContext;
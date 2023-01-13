import { useContext } from "react";

import MenuContext from "./MenuContext";

export default function useMenu() {
  const {
    showMenu,
    setShowMenu,
    menuItems,
    setMenuItems
  } = useContext(MenuContext);

  const toggleMenu = () => {
    if(showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return {
    showMenu,
    toggleMenu,
    menuItems
  };
}

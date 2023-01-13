import React, { useEffect, useState } from "react";

import { createClient } from "prismicio";
import MenuContext from "./MenuContext";

const siteGraphQuery = `{
  site {
    ...siteFields
    menu {
      title
      link {
        ...on page {
          ...pageFields
        }
        ...on section {
          ...sectionFields
        }
      }
    }
  }
}`;

export default function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const site = await client.getSingle("site", {
        graphQuery: siteGraphQuery
      })
      setMenuItems(site.data.menu)
    }
  
    fetchData().catch(console.error);
  }, [])

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        menuItems,
        setMenuItems
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

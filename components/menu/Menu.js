import { useRouter } from "next/router";

import { useMenu } from "lib";
import { linkResolver } from "prismicio";

import styles from "./Menu.module.css";

export default function Menu() {
  const { toggleMenu, menuItems } = useMenu();
  const router = useRouter();

  const handleClick = (item) => {
    const href = linkResolver(item.link);
    router.push(href);
    toggleMenu();
  };

  const handleHome = () => {
    router.push("/");
    toggleMenu();
  };

  return (
    <div className={styles.menu}>
      <header className={styles.header}>
        <div>
          <a tabIndex="0" onClick={() => handleHome()}>
            <h1>“What&apos;s Going On?”</h1>
          </a>
        </div>
        <button onClick={toggleMenu}>✕</button>
      </header>
      {menuItems && (
        <ul className={styles["menu-list"]}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a tabIndex="0" onClick={() => handleClick(item)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

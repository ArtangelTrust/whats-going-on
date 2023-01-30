import Link from "next/link";

import { useMenu } from "lib";

import styles from "./Header.module.css";
import { useState } from "react";


export default function Header({
  title = "“What's Going On?”", 
  breadcrumb = [{title: "Home"}]
}) {
  const { toggleMenu } = useMenu();
  const [isShown, setIsShown] = useState(false);
  return (
    <header className={styles.header}>
      <div>
        <ul className={styles.breadcrumb}>
          {breadcrumb.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link href={item.href}>
                  {item.title}
                </Link>
              ) : (
                <>{item.title}</>
              )}
            </li>
          ))}
        </ul>
        <Link href="/">
          <h1 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown ? "“What's Going On?”" : title}
          </h1>
        </Link>
      </div>
      <button onClick={toggleMenu}>Menu</button>
    </header>
  );
}

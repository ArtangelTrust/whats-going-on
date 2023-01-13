import Link from "next/link";

import { useMenu } from "lib";

import styles from "./Header.module.css";


export default function Header({title = "“What's Going On?”", breadcrumb = [{title: "Home"}]}) {
  const { toggleMenu } = useMenu();
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
        <h1>{title}</h1>
      </div>
      <button onClick={toggleMenu}>Menu</button>
    </header>
  );
}

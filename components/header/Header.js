import Link from "next/link";
import styles from "./Header.module.css";


export default function Header({title = "“What's Going On?”", breadcrumb = []}) {
  return (
    <header className={styles.base}>
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
      <button>Menu</button>
    </header>
  );
}

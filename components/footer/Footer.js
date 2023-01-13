import Link from "next/link";

import { linkResolver } from "prismicio";
import { useMenu } from "lib";

import styles from "./Footer.module.css";

export default function Footer() {
  const { menuItems } = useMenu();

  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Artangel
        </p>
      </div>
      <div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={linkResolver(item.link)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          <a href="https://www.artangel.org.uk/about_us/collection/" target="_blank" rel="noreferrer">
            Artangel Collection
          </a>
        </p>
        <p>
          <a href="mailto:info@artangel.org.uk">info@artangel.org.uk</a>
        </p>
        <p className="text-sm">
          For individuals wanting to access the films, please email <a href="mailto:info@artangel.org.uk">info@artangel.org.uk</a>
        </p>
      </div>
    </footer>
  );
}
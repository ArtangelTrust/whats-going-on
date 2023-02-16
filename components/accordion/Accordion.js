import cn from "classnames";
import { ArrowRight } from "components";
import { useTheme } from "lib";
import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({
  defaultOpen = false,
  collapsible = false,
  title = "",
  children,
}) {
  function handleKey({ key }) {
    [" ", "return"].includes(key) && setOpen((o) => !o);
  }
  const [open, setOpen] = useState(defaultOpen);
  // Workaround to correct text colour against highlight background
  const { currentTheme } = useTheme();
  if (collapsible) {
    return (
      <div
        className={cn(styles.details, { "pb-8": open })}
        open={defaultOpen}
        onKeyDown={handleKey}
        onClick={() => setOpen((o) => !o)}
        tabIndex="0"
      >
        <div className={`${styles.summary} ${styles[currentTheme]}`}>
          <ArrowRight
            className={`transition-transform w-8 h-8 ${open && "rotate-90"}`}
          />
          <p>{title}</p>
        </div>
        {open && children}
      </div>
    );
  } else {
    return children;
  }
}

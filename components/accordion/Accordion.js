import { ArrowRight } from "components";
import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ 
  defaultOpen = false, 
  collapsible = false, 
  title = "", 
  children 
}) {
  function handleKey({ key }) {
    [" ", "return"].includes(key) && setOpen(o => !o);
  }
  const [open, setOpen] = useState(defaultOpen);
  if (collapsible) {
    return (
      <details
        className={styles.accordion}
        open={defaultOpen}
        onKeyDown={handleKey}
        onClick={() => setOpen(o => !o)}
      >
        <summary className="bg-yellow">
          <ArrowRight 
            className={`transition-transform w-8 h-8 ${open && 'rotate-90'}`} 
          />
          <p>{title}</p>
        </summary>
        {open && children}
      </details>
    );
  } else {
    return children;
  }
}
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import styles from "./index.module.css";

const NoteformBlock = ({ slice }) => {

  const [cookies, setCookie] = useCookies(['wgo_access']);
  const router = useRouter()

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type !== 'form-submitted') {
        return
      }
      setCookie('wgo_access', true);
      router.push("/")
    }
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    }
  }, []);

  return (
    slice.primary?.noteform_link?.url && (
      <section className={styles["noteform-block"]}>
        <iframe
          src={slice.primary.noteform_link.url}
          width="100%"
          height="800px"
        />
      </section>
    )
  );
};

export default NoteformBlock;

import { useTheme } from "lib";
import styles from "./AccessibilityPanel.module.css";

export default function AccessibilityPanel() {
  const {updateTheme} = useTheme();
  return (
    <div className={styles.base}>
      <button onClick={() => updateTheme('theme-default')} className={styles.default} />
      <button onClick={() => updateTheme('theme-greyscale')} className={styles.greyscale} />
      <button onClick={() => updateTheme('theme-dark')} className={styles.invert} />
    </div>
  );
}
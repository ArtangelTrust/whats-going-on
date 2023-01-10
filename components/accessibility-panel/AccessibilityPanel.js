import styles from "./AccessibilityPanel.module.css";

export default function AccessibilityPanel() {
  return (
    <div className={styles.base}>
      <button className={styles.default} />
      <button className={styles.greyscale} />
      <button className={styles.invert} />
    </div>
  );
}
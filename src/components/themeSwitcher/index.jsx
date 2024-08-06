import styles from "./styles.module.css";

function ThemeSwitcher({ onClick, backgroundColor, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: color }}
      className={styles.switch_button}
    >
      Switch Theme
    </button>
  );
}

export default ThemeSwitcher;

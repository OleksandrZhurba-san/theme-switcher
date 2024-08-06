import styles from "./styles.module.css";
import ThemeSwitcher from "../themeSwitcher";

function Header({ color, backgroundColor, onClick }) {
  return (
    <header
      style={{
        color: color,
        backgroundColor: backgroundColor,
        borderBottom: `2px solid ${color}`,
      }}
      className={styles.header}
    >
      <p className={styles.description}>Theme Switcher:</p>
      <ThemeSwitcher
        onClick={onClick}
        backgroundColor={backgroundColor}
        color={color}
      />
    </header>
  );
}

export default Header;

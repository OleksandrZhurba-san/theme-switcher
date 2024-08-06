import styles from "./styles.module.css";

function Footer({ color, backgroundColor }) {
  return (
    <footer
      style={{
        color: color,
        backgroundColor: backgroundColor,
        borderTop: `2px solid ${color}`,
      }}
      className={styles.footer_container}
    >
      <a style={{ color: color }} className={styles.link} href="#">
        Copy Right
      </a>
      <a style={{ color: color }} className={styles.link} href="#">
        Copy Right
      </a>
    </footer>
  );
}

export default Footer;

import styles from "./styles.module.css";

export default function LinkButtons({ href, children }) {
  return (
    <a className={styles.wrapper} href={href} target="_blank">
      {children}
    </a>
  );
}

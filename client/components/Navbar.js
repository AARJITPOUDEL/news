import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>Demo News</div>
        <div className={styles.links}>
          <Link href="/" passHref>
            <span className={styles.link}>Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className={styles.link}>About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className={styles.link}>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

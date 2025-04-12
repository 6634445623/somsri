import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/concert">Concerts</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
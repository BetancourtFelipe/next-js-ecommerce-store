import './global.scss';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          copyright Skate || Buy && Skate World Wide 2023
        </footer>
      </body>
    </html>
  );
}

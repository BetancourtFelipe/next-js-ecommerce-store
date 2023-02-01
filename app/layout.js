import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div>
              <Link href="/">Home</Link>
              <Link href="/skateboards">Skateboards</Link>
              <Link href="/wheels">Wheels</Link>
              <Link href="/trucks">Trucks</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/card">Card</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          copyright Skate || Buy World Wide 2023
        </footer>
      </body>
    </html>
  );
}

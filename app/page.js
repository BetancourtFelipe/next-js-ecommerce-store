import Image from 'next/image';
import accessories from '../public/images/accessories-front.jpeg';
import skateboards from '../public/images/skateboards-front.png';
import trucks from '../public/images/trucks-front.webp';
import wheels from '../public/images/wheels-font.jpeg';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1>Skate || Buy && Skate</h1>

      <br />

      <Image className={styles.image} src={skateboards} alt="skateboards" />
      <Image className={styles.image} src={wheels} alt="wheels" />

      <br />
      <Image className={styles.image} src={trucks} alt="trucks" />
      <Image className={styles.image} src={accessories} alt="accessories" />
    </main>
  );
}

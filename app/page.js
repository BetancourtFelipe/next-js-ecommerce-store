import Image from 'next/image';
import accessories from '../public/images/accessories-front.jpeg';
import skateboards from '../public/images/skateboards-front.png';
import trucks from '../public/images/trucks-front.webp';
import wheels from '../public/images/wheels-font.jpeg';
import GenerateButton from './GenerateButton';
import styles from './global.scss';

export default function HomePage() {
  return (
    <main>
      <h1>Skate || Buy && Skate</h1>
      <GenerateButton />
      <br />
      <Image className={styles.images} src={skateboards} alt="skateboards" />
      <Image className={styles.images} src={wheels} alt="wheels" />
      <br />
      <Image className={styles.images} src={trucks} alt="trucks" />
      <Image className={styles.images} src={accessories} alt="accessories" />
    </main>
  );
}

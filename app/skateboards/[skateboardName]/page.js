import Image from 'next/image';
import { notFound } from 'next/navigation';
import { skateboards } from '../../../database/skateboard';
import styles from './page.module.scss';
import Skateboard from './skateboard';

export default function SkateboardPage({ params }) {
  const singleSkateboard = skateboards.find((skateboard) => {
    return skateboard.productName.toLowerCase() === params.skateboardName;
  });

  if (!singleSkateboard) {
    notFound();
  }
  return (
    <>
      <h1>{singleSkateboard.productName}</h1>
      <main className={styles.singleSkateboard}>
        <Image
          src={`/images/${singleSkateboard.productName}-${singleSkateboard.id}.jpg`}
          alt={singleSkateboard.type}
          width="200"
          height="250"
        />
        <p>{singleSkateboard.productDescription.toLowerCase()}</p>

        <Skateboard skateboard={singleSkateboard} />
        <h2>{singleSkateboard.type}</h2>
      </main>
    </>
  );
}

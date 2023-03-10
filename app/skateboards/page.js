import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { skateboards } from '../../database/skateboard';
import styles from './page.module.scss';

export default function SkateboardsPage() {
  const skateboardsCookie = cookies().get('skateboardsCookie');

  let skateboardsCookieParsed = [];

  if (skateboardsCookie) {
    skateboardsCookieParsed = JSON.parse(skateboardsCookie.value);
  }

  const skateboardsWithItems = skateboards.map((skateboard) => {
    const skateboardWithItems = { ...skateboard, items: 0 };

    const skateboardInCookie = skateboardsCookieParsed.find(
      (skateboardObject) => skateboard.id === skateboardObject.id,
    );

    if (skateboardInCookie) {
      skateboardWithItems.items = skateboardInCookie.items;
    }

    return skateboardWithItems;
  });

  return (
    <>
      <h1 className={styles.header}>Skateboards</h1>
      <main className={styles.main}>
        {skateboardsWithItems.map((skateboard) => {
          return (
            <div key={skateboard.id} className={styles.cart}>
              <Link
                href={`/skateboards/${skateboard.productName.toLowerCase()}`}
              >
                <h2 key={skateboard.id}>{skateboard.productName}</h2>
              </Link>
              <Link
                href={`/skateboards/${skateboard.productName.toLowerCase()}`}
              >
                <Image
                  src={`/images/${skateboard.productName}-${skateboard.id}.jpg`}
                  alt={skateboard.type}
                  width="200"
                  height="250"
                />
              </Link>

              <h3>{skateboard.type}</h3>
              <p>price: {skateboard.price}</p>
              <p>items: {skateboard.items}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

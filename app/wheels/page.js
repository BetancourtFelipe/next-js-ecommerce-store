import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { wheels } from '../../database/wheels';
import styles from './page.module.scss';

export default function WheelsPage() {
  const wheelsCookie = cookies().get('wheelsCookie');

  let wheelsCookieParsed = [];

  if (wheelsCookie) {
    wheelsCookieParsed = JSON.parse(wheelsCookie.value);
  }

  const wheelsWithItems = wheels.map((wheel) => {
    const wheelWithItems = { ...wheel, items: 0 };

    const wheelInCookie = wheelsCookieParsed.find(
      (wheelObject) => wheel.id === wheelObject.id,
    );

    if (wheelInCookie) {
      wheelWithItems.items = wheelInCookie.items;
    }

    return wheelWithItems;
  });
  return (
    <>
      <h1>Wheels</h1>
      <main className={styles.main}>
        {wheelsWithItems.map((wheel) => {
          return (
            <Fragment key={wheel.id}>
              <Link href={`/wheels/${wheel.productName.toLowerCase()}`}>
                <h2 key={wheel.id}>{wheel.productName}</h2>
                <h3>{wheel.type}</h3>

                <p>price: {wheel.price}</p>
                <p>items: {wheel.items}</p>
              </Link>
              <Link href={`/wheels/${wheel.productName.toLowerCase()}`}>
                <Image
                  src={`/images/${wheel.productName}-${wheel.id}.webp`}
                  alt={wheel.id}
                  width="200"
                  height="250"
                />
              </Link>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

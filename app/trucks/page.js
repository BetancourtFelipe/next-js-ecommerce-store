import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { trucks } from '../../database/trucks';

export default function TrucksPage() {
  const trucksCookie = cookies().get('trucksCookie');

  let trucksCookieParsed = [];

  if (trucksCookie) {
    trucksCookieParsed = JSON.parse(trucksCookie.value);
  }

  const trucksWithItems = trucks.map((truck) => {
    const truckWithItems = { ...truck, items: 0 };

    const truckInCookie = trucksCookieParsed.find(
      (truckObject) => truck.id === truckObject.id,
    );

    if (truckInCookie) {
      truckWithItems.items = truckInCookie.items;
    }

    return truckWithItems;
  });
  return (
    <>
      <h1>Trucks</h1>
      <main>
        {trucksWithItems.map((truck) => {
          return (
            <Fragment key={truck.id}>
              <Link href={`/trucks/${truck.productName.toLowerCase()}`}>
                <h2 key={truck.id}>{truck.productName}</h2>
              </Link>
              <Link href={`/trucks/${truck.productName.toLowerCase()}`}>
                <Image
                  src={`/images/${truck.productName}-${truck.id}.webp`}
                  alt={truck.id}
                  width="200"
                  height="250"
                />
              </Link>
              <p>items: {truck.items}</p>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

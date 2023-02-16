import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { accessories } from '../../database/accessories';

export default function AccessoriesPage() {
  const accessoriesCookie = cookies().get('accessoriesCookie');

  let accessoriesCookieParsed = [];

  if (accessoriesCookie) {
    accessoriesCookieParsed = JSON.parse(accessoriesCookie.value);
  }

  const accessoriesWithItems = accessories.map((accessory) => {
    const accessoryWithItems = { ...accessory, items: 0 };

    const accessoryInCookie = accessoriesCookieParsed.find(
      (accessoryObject) => accessory.id === accessoryObject.id,
    );

    if (accessoryInCookie) {
      accessoryWithItems.items = accessoryInCookie.items;
    }

    return accessoryWithItems;
  });
  return (
    <>
      <h1>Accessories</h1>
      <main>
        {accessoriesWithItems.map((accessory) => {
          return (
            <Fragment key={accessory.id}>
              <Link
                href={`/accessories/${accessory.productName.toLowerCase()}`}
              >
                <h2 key={accessory.id}>{accessory.productName}</h2>
              </Link>
              <Link
                href={`/accessories/${accessory.productName.toLowerCase()}`}
              >
                <Image
                  src={`/images/${accessory.productName}-${accessory.id}.webp`}
                  alt={accessory.type}
                  width="200"
                  height="250"
                />
              </Link>
              <p>items: {accessory.items}</p>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

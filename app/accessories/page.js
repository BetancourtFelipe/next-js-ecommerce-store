import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { accessories } from '../../database/accessories';

export default function AccessoriesPage() {
  return (
    <>
      <h1>Accessories</h1>
      <main>
        {accessories.map((accessory) => {
          return (
            <Fragment key={accessory.id}>
              <Link href={`/accessories/${accessory.productName.toLowerCase()}`}>
                <h2 key={accessory.id}>{accessory.productName}</h2>
              </Link>
              <Link href={`/accessories/${accessory.productName.toLowerCase()}`}>
                <Image
                  src={`/images/${accessory.productName}-${accessory.id}.webp`}
                  alt={accessory.type}
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

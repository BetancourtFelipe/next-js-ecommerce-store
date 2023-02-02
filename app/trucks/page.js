import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { trucks } from '../../database/trucks';

export default function TrucksPage() {
  return (
    <>
      <h1>Trucks</h1>
      <main>
        {trucks.map((truck) => {
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
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

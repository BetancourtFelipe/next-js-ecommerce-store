import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { wheels } from '../../database/wheels';

export default function WheelsPage() {
  return (
    <>
      <h1>Wheels</h1>
      <main>
        {wheels.map((wheel) => {
          return (
            <Fragment key={wheel.id}>
              <Link href={`/wheels/${wheel.productName.toLowerCase()}`}>
                <h2 key={wheel.id}>{wheel.productName}</h2>
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

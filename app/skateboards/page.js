import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { skateboards } from '../../database/skateboard';

export default function SkateboardsPage() {
  return (
    <>
      <h1>Skateboards</h1>
      <main>
        {skateboards.map((skateboard) => {
          return (
            <Fragment key={skateboard.id}>
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
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

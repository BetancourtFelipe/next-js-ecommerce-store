import Image from 'next/image';
import { Fragment } from 'react';

const skateboards = [
  { id: 1, productName: 'SantaCruz', type: 'skateboard1', price: '6000' },
  { id: 2, productName: 'Element', type: 'skateboard2', price: '7000' },
  { id: 3, productName: 'Baker', type: 'skateboard3', price: '8000' },
  { id: 4, productName: 'Girl', type: 'skateboard4', price: '6800' },
];

export default function SkateboardsPage() {
  return (
    <>
      <h1>Skateboards</h1>
      <main>
        {skateboards.map((skateboard) => {
          return (
            <Fragment key={skateboard.id}>
              <Image
                src={`/images/${skateboard.productName}-${skateboard.id}.jpg`}
                alt={skateboard.type}
                width="200"
                height="250"
              />
              <h2 key={skateboard.id}>{skateboard.productName}</h2>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

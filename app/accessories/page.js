import Image from 'next/image';
import { Fragment } from 'react';

const accessories = [
  { id: 5, productName: 'Bolts', type: 'accessor1', price: '300' },
  { id: 6, productName: 'Tool', type: 'accessor2', price: '700' },
  { id: 7, productName: 'SantaCruz', type: 'accessor3', price: '700' },
  { id: 8, productName: 'Trasher', type: 'accessor4', price: '900' },
];

export default function AccessoriesPage() {
  return (
    <>
      <h1>Accessories</h1>
      <main>
        {accessories.map((accessor) => {
          return (
            <Fragment key={accessor.id}>
              <h2 key={accessor.id}>{accessor.productName}</h2>
              <Image
                src={`/images/${accessor.productName}-${accessor.id}.webp`}
                alt={accessor.type}
                width="200"
                height="250"
              />
            </Fragment>
          );
        })}
      </main>
    </>
  );
}

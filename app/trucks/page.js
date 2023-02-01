import Image from 'next/image';
import { Fragment } from 'react';

const trucks = [
  { id: 9, productName: 'Independent', type: 'truck1', price: '5000' },
  { id: 10, productName: 'Venture', type: 'truck2', price: '4300' },
];

export default function TrucksPage() {
  return (
    <>
      <h1>Trucks</h1>
      <main>
        {trucks.map((truck) => {
          return (
            <Fragment key={truck.id}>
              <h2 key={truck.id}>{truck.productName}</h2>
              <Image
                src={`/images/${truck.productName}-${truck.id}.webp/`}
                alt={truck.id}
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

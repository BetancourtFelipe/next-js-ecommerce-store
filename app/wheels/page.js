import Image from 'next/image';
import { Fragment } from 'react';

const wheels = [
  { id: 11, productName: 'Bones', type: 'wheel1', price: '2500' },
  { id: 12, productName: 'Spitfire', type: 'wheel2', price: '3500' },
];

export default function WheelsPage() {
  return (
    <>
      <h1>Wheels</h1>
      <main>
        {wheels.map((wheel) => {
          return (
            <Fragment key={wheel.id}>
              <h2 key={wheel.id}>{wheel.productName}</h2>
              <Image
                src={`./images/${wheel.productName}-${wheel.id}.webp`}
                alt={wheel.id}
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

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { accessories } from '../../../database/accessories';
import Accessory from './accessory';

export default function AccessoryPage({ params }) {
  const singleAccessory = accessories.find((accessory) => {
    return accessory.productName.toLowerCase() === params.accessoryName;
  });

  if (!singleAccessory) {
    throw new Error('this action does not exist');
    // notFound();
  }

  return (
    <>
      <h1>{singleAccessory.productName}</h1>
      <main>
        <h2>{singleAccessory.type}</h2>
        <Image
          src={`/images/${singleAccessory.productName}-${singleAccessory.id}.webp`}
          alt={singleAccessory.type}
          width="200"
          height="250"
        />
        <Accessory accessory={singleAccessory} />
      </main>
    </>
  );
}

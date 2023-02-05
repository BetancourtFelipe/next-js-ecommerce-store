import Image from 'next/image';
import { notFound } from 'next/navigation';
import { accessories } from '../../../database/accessories';

export default function AccessoryPage(props) {
  const singleAccessory = accessories.find((accessory) => {
    return accessory.productName.toLowerCase() === props.params.accessoryName;
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
      </main>
    </>
  );
}

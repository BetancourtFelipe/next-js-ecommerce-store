import Image from 'next/image';
import { accessories } from '../../../database/accessories';

export default function AccessoryPage(props) {
  const singleAccessory = accessories.find((accessory) => {
    return accessory.productName.toLowerCase() === props.params.accessoryName;
  });

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

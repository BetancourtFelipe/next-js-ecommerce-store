import Image from 'next/image';
import { trucks } from '../../../database/trucks';

export default function TruckPage(props) {
  const singleTruck = trucks.find((truck) => {
    return truck.productName.toLowerCase() === props.params.truckName;
  });

  return (
    <>
      <h1>{singleTruck.productName}</h1>
      <main>
        <h2>{singleTruck.type}</h2>
        <Image
          src={`/images/${singleTruck.productName}-${singleTruck.id}.webp`}
          alt={singleTruck.id}
          width="200"
          height="250"
        />
      </main>
    </>
  );
}

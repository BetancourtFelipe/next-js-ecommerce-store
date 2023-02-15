import Image from 'next/image';
import { notFound } from 'next/navigation';
import { trucks } from '../../../database/trucks';

export default function TruckPage({ params }) {
  const singleTruck = trucks.find((truck) => {
    return truck.productName.toLowerCase() === params.truckName;
  });

  console.log(singleTruck);
  if (!singleTruck) {
    notFound();
  }
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
        <p>{singleTruck.productDescription.toLowerCase()}</p>
      </main>
    </>
  );
}

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { wheels } from '../../../database/wheels';

export default function WheelPage({ params }) {
  const singleWheel = wheels.find((wheel) => {
    return wheel.productName.toLowerCase() === params.wheelName;
  });
  if (!singleWheel) {
    notFound();
  }
  return (
    <>
      <h1>{singleWheel.productName}</h1>
      <main>
        <h2>{singleWheel.type}</h2>
        <Image
          src={`/images/${singleWheel.productName}-${singleWheel.id}.webp`}
          alt={singleWheel.id}
          width="200"
          height="250"
        />
        <p>{singleWheel.productDescription.toLowerCase()}</p>
      </main>
    </>
  );
}

import Image from 'next/image';
import { wheels } from '../../../database/wheels';

export default function WheelPage(props) {
  const singleWheel = wheels.find((wheel) => {
    return wheel.productName.toLowerCase() === props.params.wheelName;
  });
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
      </main>
    </>
  );
}

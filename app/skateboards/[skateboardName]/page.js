import Image from 'next/image';
import { notFound } from 'next/navigation';
import { skateboards } from '../../../database/skateboard';

export default function SkateboardPage(props) {
  const singleSkateboard = skateboards.find((skateboard) => {
    return skateboard.productName.toLowerCase() === props.params.skateboardName;
  });
  console.log(singleSkateboard);

  if (!singleSkateboard) {
    notFound();
  }
  return (
    <>
      <h1>{singleSkateboard.productName}</h1>
      <main>
        <h2>{singleSkateboard.type}</h2>
        <Image
          src={`/images/${singleSkateboard.productName}-${singleSkateboard.id}.jpg`}
          alt={singleSkateboard.type}
          width="200"
          height="250"
        />
      </main>
    </>
  );
}

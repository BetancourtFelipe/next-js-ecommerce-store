import '../../global.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import { productNotFoundMetadata } from '../../not-found';
import AddProduct from './AddProduct';

// import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    productId: string;
  };
};

// export async function generateMetadata(props: Props) {
//   console.log('PROPS', props);
//   const singleProduct = await getProduct(props.params.productName);

//   if (!singleProduct) {
//     return productNotFoundMetadata;
//   }

//   return {
//     title: singleProduct.productName,
//     description: `Add ${singleProduct.productName} to your inventory to setup your skateboard`,
//   };
// }

export default async function ProductPage(props: Props) {
  console.log(props);
  // const singleProduct = products.find((product) => {
  //   return product.id === params.id;
  // });

  const singleProduct = await getProduct(parseInt(props.params.productId));

  if (!singleProduct) {
    // throw new Error
    notFound();
  }
  console.log(singleProduct);
  return (
    <main>
      <span>
        <Image
          src={`/images/${singleProduct.productName}-${singleProduct.id}.webp`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
        <div>
          <h1>{singleProduct.productName}</h1>
          <br />
          <p>{singleProduct.productDescription}</p>
          <div>
            <div data-test-id="product-price">
              Price: {singleProduct.price} €
            </div>
            <AddProduct product={singleProduct} />
          </div>
        </div>
      </span>
    </main>
  );
}

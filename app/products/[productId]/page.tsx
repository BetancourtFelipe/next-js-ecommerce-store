import '../../global.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
// import { productNotFoundMetadata } from '../../not-found';
import AddProduct from './AddProduct';

// import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductPage(props: Props) {
  const singleProduct = await getProduct(parseInt(props.params.productId));

  if (!singleProduct) {
    // throw new Error
    notFound();
  }
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

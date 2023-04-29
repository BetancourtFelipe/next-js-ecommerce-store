import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function ProductsPage() {
  const productsCookie = cookies().get('productsCookie');

  const products = await getProducts();

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithQuantity = products.map((product) => {
    const productWithQuantity = { ...product, Quantity: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    if (productInCookie) {
      productWithQuantity.Quantity = productInCookie.Quantity;
    }

    return productWithQuantity;
  });
  return (
    <>
      <h1 className={styles.header}>Products</h1>
      <main className={styles.main}>
        {productsWithQuantity.map((product) => {
          return (
            <div key={product.id} className={styles.cart}>
              <Link href={`/products/${product.id}`}>
                <h2 key={product.id}>{product.productName}</h2>
              </Link>
              <p>{product.type}</p>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={`/images/${product.productName}-${product.id}.webp`}
                  alt={product.type}
                  width="200"
                  height="250"
                />
              </Link>

              <p>{product.price}$</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

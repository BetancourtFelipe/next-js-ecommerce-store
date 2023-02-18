import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function ProductsPage() {
  const productsCookie = cookies().get('productsCookie');

  const products = await getProducts();

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithItems = products.map((product) => {
    const productWithItems = { ...product, items: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    if (productInCookie) {
      productWithItems.items = productInCookie.items;
    }

    return productWithItems;
  });
  return (
    <>
      <h1>Products</h1>
      <main className={styles.main}>
        {productsWithItems.map((product) => {
          return (
            <div key={product.id} className={styles.cart}>
              <Link href={`/products/${product.productName.toLowerCase()}`}>
                <h2 key={product.id}>{product.productName}</h2>

                <p>price: {product.price}</p>
              </Link>

              <Link href={`/products/${product.productName.toLowerCase()}`}>
                <Image
                  src={`/images/${product.productName}-${product.id}.webp`}
                  alt={product.type}
                  width="200"
                  height="250"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}

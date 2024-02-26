import '../global.css';
import { cookies } from 'next/headers';
import React from 'react';
import { getProducts } from '../../database/products';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your purchase in just a few steps on our Checkout Page',
};

export default async function CheckoutPage() {
  const products = await getProducts();

  // get the cookie from the server
  const productsCookie = cookies().get('cart');

  // create a default value if cookie doesn't exist
  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

  const productsWithCarts = products.map((product) => {
    const productWithCarts = { ...product, amount: 0 };

    // I read the cookie and find the product
    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the product I update the amount of stars
    if (productInCookie) {
      productWithCarts.amount = productInCookie.amount;
    }

    return productWithCarts;
  });

  let total = 0;
  productsWithCarts.forEach((product) => {
    total += product.price * product.amount;
  });

  const totalprice = total.toFixed(2);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>CHECKOUT</h1>
      <span className={styles.span}>
        <div>
          <b>Total:</b> {totalprice} €
          <br />
          <b>Please fill in personal information!</b>
        </div>

        <CheckoutForm className={styles.checkoutform} />
      </span>
    </main>
  );
}

import '../global.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import DeleteProductButton from './DeleteProductButton';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cart',
  description:
    'Review your items and get excited about skateboarding sessions to come',
};

export default async function CartPage() {
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

  const cartItems = productsWithCarts.filter((product) => product.amount > 0);

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>CART</h1>
      </div>
      <ul className={styles.ul}>
        {cartItems.map((product) => (
          <li className={styles.li} key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <Image
                src={`/images/${product.productName}-${product.id}.webp`}
                alt={product.name}
                width="200"
                height="200"
              />
              <div>
                <b>{product.name}</b> {product.price} €
                <br />
                <div>
                  <b>Amount:</b> {product.amount}
                </div>
              </div>
            </Link>
            <DeleteProductButton product={product} name="remove product" />
          </li>
        ))}
      </ul>
      <div className={styles.span_div}>
        <span className={styles.span}>
          <div>
            <b>Total:</b> {totalprice} €
          </div>
          <br />
          <Link href="/checkout">
            <button className={styles.button}>Checkout</button>
          </Link>
        </span>
      </div>
    </main>
  );
}

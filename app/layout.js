import 'app/global.css';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../database/products';
import CookieBanner from './CookieBanner';

export const metadata = {
  title: {
    default: 'Skate || Buy && Skate World Wide 2023',
    template: 'Skate || Buy && Skate World Wide 2023',
  },
};

export default async function RootLayout({ children }) {
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

  let totalQuantity = 0;
  productsWithCarts.forEach((product) => {
    totalQuantity += product.amount;
  });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body>
        <CookieBanner />
        <header class="text-right">
          <div className="bg-black">
            <nav class="bg-black">
              <div>
                <div>
                  <Link href="/">Home</Link>
                  <Link href="/products">Products</Link>
                  <div>
                    <Link href="/cart">
                      Cart: <div>{totalQuantity}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer>copyright Skate || Buy && Skate World Wide 2023</footer>
      </body>
    </html>
  );
}

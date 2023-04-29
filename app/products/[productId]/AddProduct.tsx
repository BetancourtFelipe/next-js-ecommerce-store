'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Product } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export const dynamic = 'force-dynamic';

type Props = {
  product: Product;
};

export default function AddProduct(props: Props) {
  const [count, setCount] = useState(1);
  const router = useRouter();
  return (
    <div>
      <input data-test-id="product-quantity" readOnly value={count} />
      <button
        onClick={() => {
          if (count <= 1) {
            setCount(1);
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        name="Add to cart"
        data-test-id="product-add-to-cart"
        onClick={() => {
          // get cookie
          const productsInCookies = getParsedCookie('cart');
          // cookie doesn't exist, we initialize it with our useState-value
          if (!productsInCookies) {
            setStringifiedCookie('cart', [
              { id: props.product.id, amount: count },
            ]);

            return;
          }

          const foundProduct = productsInCookies.find((productInCookies) => {
            return productInCookies.id === props.product.id;
          });
          // product is inside the cookies
          if (foundProduct) {
            foundProduct.amount += count;
            // if it's not inside the cookie, we push it to the cookies
          } else {
            productsInCookies.push({
              id: props.product.id,
              amount: count,
            });
          }
          // update the cookies with the new values
          setStringifiedCookie('cart', productsInCookies);
          setCount(1);
          router.refresh();
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

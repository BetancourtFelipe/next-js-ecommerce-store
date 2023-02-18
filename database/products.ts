import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  productName: string;
  type: string;
  productDescription: string;
  price: string;
};

// get all products
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;

  return products;
});

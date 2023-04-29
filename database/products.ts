import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  productName: string;
  productType: string;
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

// get a single product
export const getProduct = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});

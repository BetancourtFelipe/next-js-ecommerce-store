export async function up(sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_name varchar(30) NOT NULL,
    type varchar(30) NOT NULL,
    product_description varchar(400) NOT NULL,
    price varchar(10) NOT NULL
)

  `;
}

export async function down(sql) {
  await sql`
DROP TABLE products
`;
}

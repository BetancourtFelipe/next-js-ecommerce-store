'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Accessory(props) {
  return (
    <div>
      <h2>{props.accessory.productName}</h2>
      <p>{props.type}</p>

      <button
        onClick={() => {
          const accessoriesInCookies = getParsedCookie('accessoriesCookie');

          if (!accessoriesInCookies) {
            return;
          }

          const foundAccessory = accessoriesInCookies.find(
            (AccessoryInCookie) => {
              return AccessoryInCookie.id === props.Accessory.id;
            },
          );

          if (foundAccessory) {
            foundAccessory.items--;

            if (foundAccessory.items < 0) {
              foundAccessory.items = 0;
            }
            setStringifiedCookie('accessoriesCookie', accessoriesInCookies);
          }
        }}
      >
        - item
      </button>
      <button
        onClick={() => {
          const accessoriesInCookies = getParsedCookie('accessoriesCookie');
          if (!accessoriesInCookies) {
            setStringifiedCookie('accessoriesCookie', [
              { id: props.accessory.id, item: 1 },
            ]);
          } else if (
            accessoriesInCookies.find((accessoryInCookie) => {
              return accessoryInCookie.id === props.accessory.id;
            })
          ) {
            const foundAccessory = accessoriesInCookies.find(
              (accessoryInCookie) => {
                return accessoryInCookie.id === props.accessory.id;
              },
            );

            foundAccessory.items++;

            setStringifiedCookie('accessoriesCookie', accessoriesInCookies);
          } else {
            setStringifiedCookie('accessoriesCookie', [
              ...accessoriesInCookies,
              { id: props.accessory.id, item: 1 },
            ]);
          }
        }}
      >
        + item
      </button>

      <button>Add To Cart</button>
    </div>
  );
}

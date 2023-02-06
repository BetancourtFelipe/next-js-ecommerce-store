'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Accessory(props) {
  return (
    <div>
      <h2>{props.accessory.productName}</h2>
      <p>{props.type}</p>
      <button>- item</button>
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
          }
        }}
      >
        + item
      </button>
    </div>
  );
}
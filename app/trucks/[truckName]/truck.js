'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Truck(props) {
  return (
    <div>
      <h2>{props.trucks.productName}</h2>
      <p>{props.type}</p>
      <button
        onClick={() => {
          const trucksInCookies = getParsedCookie('trucksCookie');

          if (!trucksInCookies) {
            return;
          }

          const foundTruck = trucksInCookies.find((truckInCookie) => {
            return truckInCookie.id === props.truck.id;
          });

          if (foundTruck) {
            foundTruck.items--;

            if (foundTruck.items < 0) {
              foundTruck.items = 0;
            }
            setStringifiedCookie('trucksCookie', trucksInCookies);
          }
        }}
      >
        - item
      </button>
      <button
        onClick={() => {
          const trucksInCookies = getParsedCookie('trucksCookie');
          if (!trucksInCookies) {
            setStringifiedCookie('trucksCookie', [
              { id: props.truck.id, item: 1 },
            ]);
            return;
          }

          const foundTruck = trucksInCookies.find((truckInCookie) => {
            return truckInCookie.id === props.truck.id;
          });

          if (foundTruck) {
            foundTruck.items++;
          } else {
            trucksInCookies.push({ id: props.truck.id, item: 1 });
          }

          setStringifiedCookie('trucksCookie', trucksInCookies);
        }}
      >
        + item
      </button>
      <button>Add To Cart</button>
    </div>
  );
}

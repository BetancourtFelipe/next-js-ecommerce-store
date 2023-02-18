'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Wheel(props) {
  return (
    <div>
      <h2>{props.wheel.productName}</h2>
      <p>{props.type}</p>
      <button
        onClick={() => {
          const wheelsInCookies = getParsedCookie('wheelsCookie');

          if (!wheelsInCookies) {
            return;
          }

          const foundWheel = wheelsInCookies.find((wheelInCookie) => {
            return wheelInCookie.id === props.wheel.id;
          });

          if (foundWheel) {
            foundWheel.items--;

            if (foundWheel.items < 0) {
              foundWheel.items = 0;
            }
            setStringifiedCookie('wheelsCookie', wheelsInCookies);
          }
        }}
      >
        - item
      </button>
      <button
        onClick={() => {
          const wheelsInCookies = getParsedCookie('wheelsCookie');
          if (!wheelsInCookies) {
            setStringifiedCookie('wheelsCookie', [
              { id: props.wheel.id, item: 1 },
            ]);
            return;
          }

          const foundWheel = wheelsInCookies.find((wheelInCookie) => {
            return wheelInCookie.id === props.wheel.id;
          });

          if (foundWheel) {
            foundWheel.items++;
          } else {
            wheelsInCookies.push({ id: props.wheel.id, item: 1 });
          }

          setStringifiedCookie('wheelsCookie', wheelsInCookies);
        }}
      >
        + item
      </button>
      <button>Add To Cart</button>
    </div>
  );
}

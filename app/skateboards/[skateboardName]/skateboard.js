'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Skateboard(props) {
  return (
    <div>
      <h2>{props.skateboard.productName}</h2>
      <p>{props.type}</p>
      <button
        onClick={() => {
          const skateboardsInCookies = getParsedCookie('skateboardsCookie');

          if (!skateboardsInCookies) {
            return;
          }

          const foundSkateboard = skateboardsInCookies.find(
            (skateboardInCookie) => {
              return skateboardInCookie.id === props.skateboard.id;
            },
          );

          if (foundSkateboard) {
            foundSkateboard.items--;

            if (foundSkateboard.items < 0) {
              foundSkateboard.items = 0;
            }
            setStringifiedCookie('skateboardsCookie', skateboardsInCookies);
          }
        }}
      >
        - item
      </button>
      <button
        onClick={() => {
          const skateboardsInCookies = getParsedCookie('skateboardsCookie');
          if (!skateboardsInCookies) {
            setStringifiedCookie('skateboardsCookie', [
              { id: props.skateboard.id, item: 1 },
            ]);
            return;
          }

          const foundSkateboard = skateboardsInCookies.find(
            (skateboardInCookie) => {
              return skateboardInCookie.id === props.skateboard.id;
            },
          );

          if (foundSkateboard) {
            foundSkateboard.items++;
          } else {
            skateboardsInCookies.push({ id: props.skateboard.id, item: 1 });
          }

          setStringifiedCookie('skateboardsCookie', skateboardsInCookies);
        }}
      >
        + item
      </button>
      <button>Add To Cart</button>
    </div>
  );
}

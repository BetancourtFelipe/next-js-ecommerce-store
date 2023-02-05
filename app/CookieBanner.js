'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiesTermsAccepted'),
  );

  const initialState = localStorageValue === null ? true : localStorageValue;

  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] =
    useState(initialState);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>This ist the cookie Police. Please accept terms of conditions</div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(false);
            window.localStorage.setItem(
              'areCookiesTermsAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </>
    )
  );
}

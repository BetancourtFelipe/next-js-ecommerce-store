'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

    const initialState =
      localStorageValue === undefined ? true : localStorageValue;

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>This ist the cookie Police. Please accept terms of conditions</div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(false);

            setLocalStorage('areCookiesTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}

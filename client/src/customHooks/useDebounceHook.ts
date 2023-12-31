import { useState, useEffect } from 'react';

export const useDebounceHook = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(delayDebounce);
  }, [value, delay]);

  return debounceValue;
};

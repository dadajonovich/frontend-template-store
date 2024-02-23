type Debounced = () => void;

export const useDebounce = (cb: () => void, delay: number): Debounced => {
  let timeout: number = NaN;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(), delay);
  };
};

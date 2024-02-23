type Debounced<T extends any[]> = (...args: T) => void;

export const useDebounce = <T extends any[]>(
  cb: (...args: T) => void,
  delay: number,
): Debounced<T> => {
  let timeout: number | undefined;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
};

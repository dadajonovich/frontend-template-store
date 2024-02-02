import { useEffect, useState, useRef } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themes')) || 'dark'
  );
  const elementRef = useRef();

  useEffect(() => {
    elementRef.current.setAttribute('data-theme', theme);
    localStorage.setItem('themes', JSON.stringify(theme));
  }, [theme]);

  return [elementRef, () => setTheme(theme === 'light' ? 'dark' : 'light')];
}

export default useTheme;

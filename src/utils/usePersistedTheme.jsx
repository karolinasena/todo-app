import { useState, useEffect } from "react";

const usePersistedTheme = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state)); 
  }, [key, state])

  return [state, setState];
}

export default usePersistedTheme;
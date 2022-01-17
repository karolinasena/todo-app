import { useState, useEffect } from "react";

const usePersistedTasks = (key, item) => {
  const [state, setState] = useState(() => {
      const storageValue = localStorage.getItem(key);

      if(storageValue) {
        return JSON.parse(storageValue);
      } else {
        return item;
      }
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    
  }, [key, state]);

  return [state, setState];
}

export default usePersistedTasks;
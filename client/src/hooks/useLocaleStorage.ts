import { useState, useEffect } from 'react';


// export const useLocaleStorage = (key: string) => {


//     const getItem = (key: string) => localStorage.getItem(key)
//     const setItem = (key: string) => localStorage.setItem(key, JSON.stringify(value))


//     const [value, setValue] = useState<object>(() => getItem(key))





//     return {
//         value,
//         setValue,
//         setItem
//     }
// }

// Hook
export function useLocalStorage<T>(key: string, initialValue: T) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };


    const removeValue = (key: string ) => localStorage.removeItem(key)


    return [storedValue, setValue, removeValue] as const;
  }




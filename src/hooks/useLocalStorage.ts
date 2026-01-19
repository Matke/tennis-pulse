import { useEffect, useState } from "react";

const getStorageValue = <T>(key: string, defaultValue: T) => {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  }
};

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    // storing based on key
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(
        `useLocalStorage: Failed to set localStorage key ${key}`,
        error,
      );
    }
  }, [key, value]);

  return [value, setValue];
};

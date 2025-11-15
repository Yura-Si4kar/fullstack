"use client";
import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // працює тільки на клієнті
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        setValue(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Error reading localStorage:", err);
    }
  }, [key]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error saving to localStorage:", err);
    }
  }, [key, value]);

  return [value, setValue];
};

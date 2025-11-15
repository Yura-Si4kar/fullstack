"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import detectDarkMode from "@/utils/detectDarkMode";

export default function DarkModeBtn() {
  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";
  const systemTheme = detectDarkMode();
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', systemTheme);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const listener = (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      setDarkMode(newColorScheme);
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, [setDarkMode]);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  if (!isClient) return null; // <– не рендеримо на сервері

  return (
    <button className={darkMode === "dark" ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img
        src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/sun.svg`}
        alt="Light mode"
        className="dark-mode-btn__icon"
      />
      <img
        src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/moon.svg`}
        alt="Dark mode"
        className="dark-mode-btn__icon"
      />
    </button>
  );
}

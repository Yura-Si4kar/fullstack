"use client";
import { setThemeSchemeToCookie } from "@/http/theme";
import React, { useEffect, useState } from "react";

export default function DarkModeBtn() {
  const [theme, setTheme] = useState(null); // <- важливо!

  useEffect(() => {
    // Читаємо клас теми з DOM
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // відправляємо на сервер для збереження
    setThemeSchemeToCookie(newTheme);
  };

  if (theme === null) return null; // <- кнопка не рендериться поки тема невідома

  return (
    <button
      onClick={toggle}
      className={theme === "dark" ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"}
    >
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

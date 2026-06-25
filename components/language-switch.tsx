"use client";

import React from "react";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-white/80 backdrop-blur-[0.5rem] border border-white/40 shadow-lg rounded-full p-1 gap-1 dark:bg-gray-950/80 dark:border-black/40">
      <button
        onClick={() => setLanguage("en")}
        className={clsx(
          "px-2 py-1 rounded-full text-xs font-semibold transition-all",
          language === "en"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("tr")}
        className={clsx(
          "px-2 py-1 rounded-full text-xs font-semibold transition-all",
          language === "tr"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        )}
      >
        TR
      </button>
    </div>
  );
}

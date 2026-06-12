"use client"

import { useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setThemeState(isDark ? "dark" : "light")
    setMounted(true)
  }, [])

  const applyTheme = useCallback((next: Theme) => {
    const root = document.documentElement
    root.classList.toggle("dark", next === "dark")
    root.classList.toggle("light", next === "light")
    try {
      localStorage.setItem("theme", next)
    } catch {
      // ignore
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark")
  }, [theme, applyTheme])

  return { theme, toggleTheme, setTheme: applyTheme, mounted }
}

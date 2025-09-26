// src/theme/ThemeProvider.tsx

import React, { createContext, useState, useMemo, useEffect } from 'react'
import { Appearance } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { themes, Theme } from './theme'

const themeStorage = new MMKV({
  id: 'user-theme-storage',
})

// 1. CẬP NHẬT LẠI TYPE CHO CONTEXT
// Thêm "colors" vào đây.
type ThemeContextType = {
  theme: Theme
  colors: Theme['colors'] // <--- THAY ĐỔI Ở ĐÂY
  isDark: boolean
  setTheme: (themeName: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const savedTheme = themeStorage.getString('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
    return Appearance.getColorScheme() || 'light'
  })

  const setTheme = (name: 'light' | 'dark') => {
    setThemeName(name)
    themeStorage.set('theme', name)
  }

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const userHasChosenTheme = themeStorage.getString('theme')
      if (!userHasChosenTheme && colorScheme) {
        setThemeName(colorScheme)
      }
    })
    return () => subscription.remove()
  }, [])

  // 2. CẬP NHẬT LẠI GIÁ TRỊ CỦA PROVIDER
  const value = useMemo(() => {
    const currentTheme = themes[themeName]
    return {
      theme: currentTheme,
      colors: currentTheme.colors, // <--- THÊM "colors" VÀO ĐÂY
      isDark: themeName === 'dark',
      setTheme,
    }
  }, [themeName])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// src/hooks/useTheme.ts

import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  // Đảm bảo hook được sử dụng bên trong một ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

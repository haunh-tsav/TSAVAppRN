import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { createGlobalStyles } from './../styles'
import { useTheme } from './useTheme'

export const useStyle = () => {
  const { theme } = useTheme()

  const styles = useMemo(() => {
    // Gọi hàm tạo style chung
    const allStyles = createGlobalStyles(theme)

    return StyleSheet.create(allStyles)
  }, [theme])

  return styles
}

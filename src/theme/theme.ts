// src/theme/theme.ts

import { ColorPallete, Pallete } from '@/theme/types'

// Định nghĩa các key màu sắc mà ứng dụng sẽ sử dụng
const pallete: Pallete = {
  // Primary
  primary100: '#e6f0f6',
  primary200: '#b3d5e9',
  primary300: '#80badc',
  primary400: '#4d9fcf',
  primary500: '#0466a4', // Màu gốc
  primary600: '#035b92',
  primary700: '#035080',
  primary800: '#02456e',
  primary900: '#01314d',

  // Grays
  gray100: '#f9fafb',
  gray200: '#d8dee5',
  gray300: '#b6c2cf',
  gray400: '#95a7b8',
  gray500: '#748ba2',
  gray600: '#596f85',
  gray700: '#435364',
  gray800: '#2d3843',
  gray900: '#161c22',
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',

  // Accents
  error: '#dc3545',
  success: '#28a745',
}

// Định nghĩa cấu trúc màu sắc cho Light Theme
const lightColors: ColorPallete = {
  primary: pallete.primary500,
  background: pallete.gray100, // Nền sáng
  card: pallete.white, // Màu thẻ
  text: pallete.gray900, // Chữ chính
  textSecondary: pallete.gray600, // Chữ phụ
  border: pallete.gray300, // Viền
  success: pallete.success,
  error: pallete.error,
  white: pallete.white,
  black: pallete.black,
  pallete,
}

// Định nghĩa cấu trúc màu sắc cho Dark Theme
const darkColors: ColorPallete = {
  primary: pallete.primary400, // Tăng độ sáng cho màu primary để nổi bật trên nền tối
  background: pallete.gray900, // Nền tối
  card: pallete.gray800, // Màu thẻ tối
  text: pallete.gray100, // Chữ chính sáng
  textSecondary: pallete.gray400, // Chữ phụ
  border: pallete.gray700, // Viền
  success: pallete.success,
  error: pallete.error,
  white: pallete.white,
  black: pallete.black,
  pallete,
}

// Spacing - Hệ thống khoảng cách (dựa trên hệ 8-point grid)
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}

// Typography - Hệ thống chữ viết
const typography = {
  h1: { fontSize: 28, fontWeight: 'bold' as const },
  h2: { fontSize: 24, fontWeight: 'bold' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: 'normal' as const },
  caption: { fontSize: 12, fontWeight: 'normal' as const },
}

// Gom tất cả lại thành một object theme hoàn chỉnh
export const themes = {
  light: {
    colors: lightColors,
    typography,
    spacing,
  },
  dark: {
    colors: darkColors,
    typography,
    spacing,
  },
}

// Export ra một Type để sử dụng trong toàn bộ ứng dụng, đảm bảo type-safe
export type Theme = typeof themes.light

// src/theme/theme.ts

import { ColorPallete } from './types'

// Định nghĩa cấu trúc màu sắc cho Light Theme
const lightColors: ColorPallete = {
  primary: '#0466a4',
  primaryLight: '#057ac5', // Dùng khi nhấn nút
  primaryDark: '#035283',
  accent: '#FFC107', // Vàng gold/hổ phách
  background: '#F8F9FA', // Nền xám rất nhạt
  card: '#FFFFFF', // Thẻ màu trắng
  text: '#212529', // Chữ đen đậm
  textSecondary: '#6C757D', // Chữ xám phụ
  border: '#E9ECEF', // Viền xám nhạt
  placeholder: '#ADB5BD',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  white: '#FFFFFF',
}

// Định nghĩa cấu trúc màu sắc cho Light Theme
const darkColors: ColorPallete = {
  primary: '#0466a4',
  primaryLight: '#057ac5', // Dùng khi nhấn nút
  primaryDark: '#035283',
  accent: '#FFC107', // Vàng gold/hổ phách
  background: '#F8F9FA', // Nền xám rất nhạt
  card: '#FFFFFF', // Thẻ màu trắng
  text: '#212529', // Chữ đen đậm
  textSecondary: '#6C757D', // Chữ xám phụ
  border: '#E9ECEF', // Viền xám nhạt
  placeholder: '#ADB5BD',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  white: '#FFFFFF',
}

const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' as const },
  h2: { fontSize: 24, fontWeight: 'bold' as const },
  body: { fontSize: 16, fontWeight: 'normal' as const },
  caption: { fontSize: 12, fontWeight: 'normal' as const },
}

const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}

const radii = {
  sm: 4,
  md: 8,
  lg: 16,
}

// Gom tất cả lại thành một object theme hoàn chỉnh
export const themes = {
  light: {
    colors: lightColors,
    typography,
    spacing,
    radii,
  },
  dark: {
    colors: darkColors,
    typography,
    spacing,
    radii,
  },
}

// Export ra một Type để sử dụng trong toàn bộ ứng dụng, đảm bảo type-safe
export type Theme = typeof themes.light

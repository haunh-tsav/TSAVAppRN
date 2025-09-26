export type Pallete = {
  // Primary
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string

  // Grays
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string

  // Neutrals
  white: string
  black: string

  // Accents
  error: string
  success: string
}

export type ColorPallete = {
  primary: string
  background: string
  card: string
  text: string
  textSecondary: string
  border: string
  error: string
  success: string
  black: string
  white: string
  pallete: Pallete
}

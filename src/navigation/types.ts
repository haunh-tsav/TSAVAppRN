import type { Paths } from '@/navigation/paths'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>

export type RootStackParamList = {
  [Paths.Root.App]: undefined
  [Paths.Root.Auth]: undefined
}

export type AuthStackParamList = {
  [Paths.Auth.Login]: undefined
  [Paths.Auth.Register]: undefined
}

export type AppStackParamList = {
  [Paths.App.ERP.Customer]: undefined
  [Paths.App.ERP.Supplier]: undefined
  [Paths.App.ERP.Warehouse]: undefined
}

import type { AppRoutes } from '@/navigation/paths'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>

export type RootStackParamList = {
  [AppRoutes.Root.App.path]: undefined
  [AppRoutes.Root.Auth.path]: undefined
}

export type AuthStackParamList = {
  [AppRoutes.Auth.Login.path]: undefined
  [AppRoutes.Auth.Register.path]: undefined
}

export type AppStackParamList = {
  [AppRoutes.App.ERP.child.KhachHang.path]: undefined
  [AppRoutes.App.ERP.child.NhaCungCap.path]: undefined
  [AppRoutes.App.ERP.child.Kho.path]: undefined
}

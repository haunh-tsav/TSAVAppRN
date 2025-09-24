import { UserRole } from '@/api/schemas/user.schema'
import type {
  AuthRoutes,
  BottomRoutes,
  DrawerRoutes,
  RootRoutes,
} from '@/navigation/routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>

export type RootStackParamList = {
  [RootRoutes.App.path]: undefined
  [RootRoutes.Auth.path]: undefined
}

export type AuthStackParamList = {
  [AuthRoutes.Login.path]: undefined
  [AuthRoutes.Register.path]: undefined
}

export type AppBottomStackParamList = {
  // ERP
  [BottomRoutes.Home.path]: undefined
  [BottomRoutes.Explore.path]: undefined
  [BottomRoutes.Search.path]: undefined
  [BottomRoutes.Profile.path]: undefined
}

export type AppDrawerStackParamList = {
  // ERP
  [DrawerRoutes.ERP.child.KhachHang.path]: undefined
  [DrawerRoutes.ERP.child.NhaCungCap.path]: undefined
  [DrawerRoutes.ERP.child.Kho.path]: undefined
  // Cut
  [DrawerRoutes.Cat.child.KyLucTraiVai.path]: undefined
  [DrawerRoutes.Cat.child.XacNhanKyLucTraiVai.path]: undefined
}

export type DrawerGroupType = {
  key: number
  name: string
  groupName: string
  roles: UserRole[]
  iconName: string // MaterialCommunityIcons name
  childs: DrawerItemType[]
}

export type DrawerItemType = {
  key: number
  name: string
  groupName: string
  path: string
  roles: UserRole[]
  component:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.ReactNode
    | any
  iconName: string // MaterialCommunityIcons name
}

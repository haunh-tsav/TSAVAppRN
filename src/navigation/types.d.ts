import { UserRole } from '@/api/schemas/user.schema'
import type { BottomRoutes } from '@/navigation/routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>

export type RootStackParamList = {
  app: undefined // Màn hình không nhận tham số
  auth: undefined // Màn hình không nhận tham số
  'goi-bao-tri': undefined // Màn hình không nhận tham số
  'goi-nguyen-lieu': undefined // Màn hình không nhận tham số
  'goi-hang-cat': undefined // Màn hình không nhận tham số
  'goi-it': undefined // Màn hình không nhận tham số
  'goi-qa': undefined // Màn hình không nhận tham số
  'goi-qc': undefined // Màn hình không nhận tham số
  'goi-san-xuat': undefined // Màn hình không nhận tham số
  'goi-tps': undefined // Màn hình không nhận tham số
  'goi-an-toan': undefined // Màn hình không nhận tham số
  'thong-bao': undefined // Màn hình không nhận tham số
}

export type AuthStackParamList = {
  login: undefined
  register: undefined
}

export type AppBottomStackParamList = {
  // ERP
  [BottomRoutes.Panel.path]: undefined
  [BottomRoutes.Explore.path]: undefined
  [BottomRoutes.Home.path]: undefined
  [BottomRoutes.Search.path]: undefined
  [BottomRoutes.Profile.path]: undefined
}

export type NavigationRouteType = {
  key: string
  label: string
  path: string
  /**
   * Material icon
   */
  icon?: FC<SvgProps>
  component: () => JSX.Element
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
    | ScreenComponentType<AppDrawerStackParamList, string>
    | undefined
  iconName: string // MaterialCommunityIcons name
}

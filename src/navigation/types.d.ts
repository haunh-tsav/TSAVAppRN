import { UserRole } from '@/api/models/user'
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
  'thong-bao-chi-tiet': {
    id: string
  } // Màn hình không nhận tham số
}

export type AuthStackParamList = {
  login: undefined
  register: undefined
}

export type AppBottomStackParamList = {
  // ERP
  panel: undefined
  explore: undefined
  home: undefined
  search: undefined
  profile: undefined
}

export type NavigationRouteType = {
  key: string
  label: string
  path: string
  /**
   * Material icon
   */
  icon?: FC<SvgProps>
  roles?: UserRole[]
  group?: string
  component:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.ReactNode
    | ScreenComponentType<AppDrawerStackParamList, string>
    | undefined
}

export type DrawerGroupType = {
  key: string
  label: string
  group: string
  roles: UserRole[]
  icon: FC<SvgProps> // MaterialCommunityIcons name
  childs: NavigationRouteType[]
}

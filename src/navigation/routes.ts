import AppStack from '@/navigation/stacks/AppStack'
import AuthStack from '@/navigation/stacks/AuthStack'
import { DrawerGroupType } from '@/navigation/types'
import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import RegisterScreen from '@/screens/Authen/Register/RegisterScreen'
import KyLucTraiVaiScreen from '@/screens/Cut/KyLucTraiVaiScreen'
import XacNhanKyLucTraiVaiScreen from '@/screens/Cut/XacNhanKyLucTraiVaiScreen'
import {
  default as CustomerScreen,
  default as KhachHangScreen,
} from '@/screens/ERP/KhachHangScreen'
import {
  default as KhoScreen,
  default as WarehouseScreen,
} from '@/screens/ERP/KhoScreen'
import {
  default as NhaCungCapScreen,
  default as SupplierScreen,
} from '@/screens/ERP/NhaCungCapScreen'
import ExploreScreen from '@/screens/Explore/ExploreScreen'
import HangMucScreen from '@/screens/HangMuc/HangMucScreen'
import HomeScreen from '@/screens/Home/HomeScreen'
import ProfileScreen from '@/screens/Profile/ProfileScreen'
import SearchScreen from '@/screens/Search/SearchScreen'

export const RootRoutes = {
  App: {
    path: 'app',
    label: 'App',
    component: AppStack,
  },
  Auth: {
    path: 'auth',
    label: 'Auth',
    component: AuthStack,
  },
}

export const AuthRoutes = {
  Login: {
    path: 'login',
    label: 'Login',
    component: LoginScreen,
  },
  Register: {
    path: 'register',
    label: 'Register',
    component: RegisterScreen,
  },
}

export const BottomRoutes = {
  Home: {
    label: 'Home',
    path: 'home',
    icon: HomeScreen,
  },
  Explore: {
    label: 'Explore',
    path: 'Explore',
    icon: ExploreScreen,
  },
  Search: {
    label: 'Search',
    path: 'Search',
    icon: SearchScreen,
  },
  Profile: {
    label: 'Profile',
    path: 'Profile',
    icon: ProfileScreen,
  },
}

export const DrawerRoutes = {
  ERP: {
    label: 'ERP',
    child: {
      KhachHang: {
        path: 'khach-hang',
        label: 'Khách hàng',
        component: CustomerScreen,
      },
      NhaCungCap: {
        path: 'nha-cung-cap',
        label: 'Nhà cung cấp',
        component: SupplierScreen,
      },
      Kho: {
        path: 'kho',
        label: 'Kho',
        component: WarehouseScreen,
      },
    },
  },
  Cat: {
    label: 'Cắt',
    child: {
      KyLucTraiVai: {
        path: 'ky-luc-trai-vai',
        label: 'Ký lục trãi vải',
        component: KyLucTraiVaiScreen,
      },
      XacNhanKyLucTraiVai: {
        path: 'xac-nhan-ky-luc-hang-cat',
        label: 'Xác nhận ký lục hàng cắt',
        component: XacNhanKyLucTraiVaiScreen,
      },
    },
  },
}

export const DrawerList: DrawerGroupType[] = [
  {
    key: 0,
    name: 'ERP',
    groupName: 'ERP',
    roles: ['admin', 'user'],
    iconName: 'folder',
    childs: [
      {
        key: 0,
        name: 'Khách hàng',
        groupName: 'ERP',
        path: 'khach-hang',
        roles: ['admin', 'guest'],
        component: KhachHangScreen,
        iconName: 'folder',
      },
      {
        key: 1,
        name: 'Nhà cung cấp',
        groupName: 'ERP',
        path: 'nha-cung-cap',
        roles: ['admin'],
        component: NhaCungCapScreen,
        iconName: 'folder',
      },
      {
        key: 2,
        name: 'Kho',
        groupName: 'ERP',
        path: 'kho',
        roles: ['admin'],
        component: KhoScreen,
        iconName: 'folder',
      },
      {
        key: 3,
        name: 'Hạng mục',
        groupName: 'ERP',
        path: 'hang-muc',
        roles: ['admin'],
        component: HangMucScreen,
        iconName: 'folder',
      },
    ],
  },
  {
    key: 1,
    name: 'Cắt',
    groupName: 'Cat',
    roles: ['admin', 'user'],
    iconName: 'folder',
    childs: [
      {
        key: 0,
        name: 'Ký lục trãi vãi',
        groupName: 'Cat',
        path: 'ky-luc-trai-vai',
        roles: ['admin', 'user'],
        component: KyLucTraiVaiScreen,
        iconName: 'folder',
      },
      {
        key: 1,
        name: 'Xác nhận ký lục trãi vãi',
        groupName: 'Cat',
        path: 'xac-nhan-ky-luc-trai-vai',
        roles: ['admin', 'user'],
        component: XacNhanKyLucTraiVaiScreen,
        iconName: 'folder',
      },
    ],
  },
]

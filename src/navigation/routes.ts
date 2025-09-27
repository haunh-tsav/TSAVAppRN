import { DrawerGroupType, NavigationRouteType } from '@/navigation/types'
import KyLucTraiVaiScreen from '@/screens/Cut/KyLucTraiVaiScreen'
import XacNhanKyLucTraiVaiScreen from '@/screens/Cut/XacNhanKyLucTraiVaiScreen'
import KhachHangScreen from '@/screens/ERP/KhachHangScreen'
import KhoScreen from '@/screens/ERP/KhoScreen'
import NhaCungCapScreen from '@/screens/ERP/NhaCungCapScreen'
import ExploreScreen from '@/screens/Explore/ExploreScreen'
import HangMucScreen from '@/screens/HangMuc/HangMucScreen'
import HomeScreen from '@/screens/Home/HomeScreen'
import PanelScreen from '@/screens/Panel/PanelScreen'
import ProductScreen from '@/screens/Product/ProductScreen'
import ProfileScreen from '@/screens/Profile/ProfileScreen'
import SearchScreen from '@/screens/Search/SearchScreen'
import { IconERP, IconUser } from '@/theme/assets/icons'

export const BottomRoutes: NavigationRouteType[] = [
  {
    key: '0',
    label: 'Panel',
    path: 'panel',
    icon: IconERP,
    component: PanelScreen,
  },
  {
    key: '2',
    label: 'Explore',
    path: 'explore',
    icon: IconERP,
    component: ExploreScreen,
  },
  {
    key: '1',
    label: 'Home',
    path: 'home',
    icon: IconERP,
    component: HomeScreen,
  },
  {
    key: '3',
    label: 'Search',
    path: 'search',
    icon: IconERP,
    component: SearchScreen,
  },
  {
    key: '4',
    label: 'Profile',
    path: 'profile',
    icon: IconERP,
    component: ProfileScreen,
  },
]

export const DrawerRoutes: DrawerGroupType[] = [
  {
    key: '0',
    label: 'ERP',
    group: 'ERP',
    roles: ['admin', 'user'],
    icon: IconERP,
    childs: [
      {
        key: '0',
        label: 'Khách hàng',
        group: 'ERP',
        path: 'khach-hang',
        roles: ['admin', 'guest'],
        component: KhachHangScreen,
        icon: IconUser,
      },
      {
        key: '1',
        label: 'Nhà cung cấp',
        group: 'ERP',
        path: 'nha-cung-cap',
        roles: ['admin'],
        component: NhaCungCapScreen,
        icon: IconUser,
      },
      {
        key: '2',
        label: 'Kho',
        group: 'ERP',
        path: 'kho',
        roles: ['admin'],
        component: KhoScreen,
        icon: IconUser,
      },
      {
        key: '3',
        label: 'Hạng mục',
        group: 'ERP',
        path: 'hang-muc',
        roles: ['admin'],
        component: HangMucScreen,
        icon: IconUser,
      },
      {
        key: '4',
        label: 'Sản phẩm',
        group: 'ERP',
        path: 'san-pham',
        roles: ['admin'],
        component: ProductScreen,
        icon: IconUser,
      },
    ],
  },
  {
    key: '1',
    label: 'Cắt',
    group: 'Cat',
    roles: ['admin', 'user'],
    icon: IconUser,
    childs: [
      {
        key: '0',
        label: 'Ký lục trãi vãi',
        group: 'Cat',
        path: 'ky-luc-trai-vai',
        roles: ['admin', 'user'],
        component: KyLucTraiVaiScreen,
        icon: IconUser,
      },
      {
        key: '1',
        label: 'Xác nhận ký lục trãi vãi',
        group: 'Cat',
        path: 'xac-nhan-ky-luc-trai-vai',
        roles: ['admin', 'user'],
        component: XacNhanKyLucTraiVaiScreen,
        icon: IconUser,
      },
    ],
  },
]

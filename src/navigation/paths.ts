import AppStack from '@/navigation/stacks/AppStack'
import AuthStack from '@/navigation/stacks/AuthStack'
import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import RegisterScreen from '@/screens/Authen/Register/RegisterScreen'
import KyLucTraiVaiScreen from '@/screens/Cut/KyLucTraiVaiScreen'
import XacNhanKyLucTraiVaiScreen from '@/screens/Cut/XacNhanKyLucTraiVaiScreen'
import CustomerScreen from '@/screens/ERP/Customer'
import SupplierScreen from '@/screens/ERP/Supplier'
import WarehouseScreen from '@/screens/ERP/Warehouse'

export const AppRoutes = {
  Root: {
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
  },
  Auth: {
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
  },
  App: {
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
        XacNhanKyLucHangCat: {
          path: 'xac-nhan-ky-luc-hang-cat',
          label: 'Xác nhận ký lục hàng cắt',
          component: XacNhanKyLucTraiVaiScreen,
        },
      },
    },
  },
}

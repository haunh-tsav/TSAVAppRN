import { NavigationRouteType } from '@/navigation/types'
import GoiAnToanScreen from '@/screens/Home/screens/GoiAnToan/GoiAnToanScreen'
import GoiBaoTriScreen from '@/screens/Home/screens/GoiBaoTri/GoiBaoTriScreen'
import GoiHangCatScreen from '@/screens/Home/screens/GoiHangCat/GoiHangCatScreen'
import GoiITScreen from '@/screens/Home/screens/GoiIT/GoiITScreen'
import GoiNguyenLieuScreen from '@/screens/Home/screens/GoiNguyenLieu/GoiNguyenLieuScreen'
import GoiQAScreen from '@/screens/Home/screens/GoiQA/GoiQAScreen'
import GoiQCScreen from '@/screens/Home/screens/GoiQC/GoiQCScreen'
import GoiSanXuatScreen from '@/screens/Home/screens/GoiSanXuat/GoiSanXuatScreen'
import GoiTPSScreen from '@/screens/Home/screens/GoiTPS/GoiTPSScreen'
import NotificationScreen from '@/screens/Home/screens/Notification/NotificationScreen'
import IconCut from '@/theme/assets/icons/icon-cut.svg'
import IconImprove from '@/theme/assets/icons/icon-improve.svg'
import IconIT from '@/theme/assets/icons/icon-it.svg'
import IconMaintenance from '@/theme/assets/icons/icon-maintenance.svg'
import IconManufacture from '@/theme/assets/icons/icon-manufacture.svg'
import IconPhoneQA from '@/theme/assets/icons/icon-phone-qa.svg'
import IconPhoneQC from '@/theme/assets/icons/icon-phone-qc.svg'
import IconProtector from '@/theme/assets/icons/icon-protector.svg'
import IconShipping from '@/theme/assets/icons/icon-shopping.svg'

export const HomeRoutes: NavigationRouteType[] = [
  {
    key: '0',
    label: 'Gọi bảo trì',
    path: 'goi-bao-tri',
    icon: IconMaintenance,
    component: GoiBaoTriScreen,
  },
  {
    key: '1',
    label: 'Gọi nguyên liệu',
    path: 'goi-nguyen-lieu',
    icon: IconShipping,
    component: GoiNguyenLieuScreen,
  },
  {
    key: '2',
    label: 'Gọi hàng cắt',
    path: 'goi-hang-cat',
    icon: IconCut,
    component: GoiHangCatScreen,
  },
  {
    key: '3',
    label: 'Gọi IT',
    path: 'goi-it',
    icon: IconIT,
    component: GoiITScreen,
  },
  {
    key: '4',
    label: 'Gọi QA',
    path: 'goi-qa',
    icon: IconPhoneQA,
    component: GoiQAScreen,
  },
  {
    key: '5',
    label: 'Gọi QC',
    path: 'goi-qc',
    icon: IconPhoneQC,
    component: GoiQCScreen,
  },
  {
    key: '6',
    label: 'Gọi sản xuất',
    path: 'goi-san-xuat',
    icon: IconManufacture,
    component: GoiSanXuatScreen,
  },
  {
    key: '7',
    label: 'Gọi TPS',
    path: 'goi-tps',
    icon: IconImprove,
    component: GoiTPSScreen,
  },
  {
    key: '8',
    label: 'Gọi an toàn',
    path: 'goi-an-toan',
    icon: IconProtector,
    component: GoiAnToanScreen,
  },
  {
    key: '9',
    label: 'Thông báo',
    path: 'thong-bao',
    icon: IconProtector,
    component: NotificationScreen,
  },
]

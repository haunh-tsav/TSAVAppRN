import GoiAnToanScreen from '@/screens/Home/screens/GoiAnToan/GoiAnToanScreen'
import GoiBaoTriScreen from '@/screens/Home/screens/GoiBaoTri/GoiBaoTriScreen'
import GoiHangCatScreen from '@/screens/Home/screens/GoiHangCat/GoiHangCatScreen'
import GoiITScreen from '@/screens/Home/screens/GoiIT/GoiITScreen'
import GoiNguyenLieuScreen from '@/screens/Home/screens/GoiNguyenLieu/GoiNguyenLieuScreen'
import GoiQAScreen from '@/screens/Home/screens/GoiQA/GoiQAScreen'
import GoiQCScreen from '@/screens/Home/screens/GoiQC/GoiQCScreen'
import GoiSanXuatScreen from '@/screens/Home/screens/GoiSanXuat/GoiSanXuatScreen'
import GoiTPSScreen from '@/screens/Home/screens/GoiTPS/GoiTPSScreen'
import { HomeServiceType } from '@/screens/Home/types'

export const homeServices: HomeServiceType[] = [
  {
    key: '0',
    label: 'Gọi bảo trì',
    icon: 'setting',
    component: GoiBaoTriScreen,
  },
  {
    key: '1',
    label: 'Gọi nguyên liệu',
    icon: 'accessory',
    component: GoiNguyenLieuScreen,
  },
  {
    key: '2',
    label: 'Gọi hàng cắt',
    icon: 'accessory',
    component: GoiHangCatScreen,
  },
  {
    key: '3',
    label: 'Gọi IT',
    icon: 'accessory',
    component: GoiITScreen,
  },
  {
    key: '4',
    label: 'Gọi QA',
    icon: 'accessory',
    component: GoiQAScreen,
  },
  {
    key: '5',
    label: 'Gọi QC',
    icon: 'accessory',
    component: GoiQCScreen,
  },
  {
    key: '6',
    label: 'Gọi sản xuất',
    icon: 'accessory',
    component: GoiSanXuatScreen,
  },
  {
    key: '7',
    label: 'Gọi TPS',
    icon: 'accessory',
    component: GoiTPSScreen,
  },
  {
    key: '8',
    label: 'Gọi an toàn',
    icon: 'accessory',
    component: GoiAnToanScreen,
  },
]

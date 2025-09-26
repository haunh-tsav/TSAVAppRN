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
import IconCut from '@/theme/assets/icons/icon-cut.svg'
import IconImprove from '@/theme/assets/icons/icon-improve.svg'
import IconIT from '@/theme/assets/icons/icon-it.svg'
import IconMaintenance from '@/theme/assets/icons/icon-maintenance.svg'
import IconManufacture from '@/theme/assets/icons/icon-manufacture.svg'
import IconPhoneQA from '@/theme/assets/icons/icon-phone-qa.svg'
import IconPhoneQC from '@/theme/assets/icons/icon-phone-qc.svg'
import IconProtector from '@/theme/assets/icons/icon-protector.svg'
import IconShipping from '@/theme/assets/icons/icon-shopping.svg'

export const homeServices: HomeServiceType[] = [
  {
    key: '0',
    label: 'Gọi bảo trì',
    icon: IconMaintenance,
    component: GoiBaoTriScreen,
  },
  {
    key: '1',
    label: 'Gọi nguyên liệu',
    icon: IconShipping,
    component: GoiNguyenLieuScreen,
  },
  {
    key: '2',
    label: 'Gọi hàng cắt',
    icon: IconCut,
    component: GoiHangCatScreen,
  },
  {
    key: '3',
    label: 'Gọi IT',
    icon: IconIT,
    component: GoiITScreen,
  },
  {
    key: '4',
    label: 'Gọi QA',
    icon: IconPhoneQA,
    component: GoiQAScreen,
  },
  {
    key: '5',
    label: 'Gọi QC',
    icon: IconPhoneQC,
    component: GoiQCScreen,
  },
  {
    key: '6',
    label: 'Gọi sản xuất',
    icon: IconManufacture,
    component: GoiSanXuatScreen,
  },
  {
    key: '7',
    label: 'Gọi TPS',
    icon: IconImprove,
    component: GoiTPSScreen,
  },
  {
    key: '8',
    label: 'Gọi an toàn',
    icon: IconProtector,
    component: GoiAnToanScreen,
  },
]

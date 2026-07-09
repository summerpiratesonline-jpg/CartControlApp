import Svg, { Path, Circle, Line, Rect, G } from 'react-native-svg'
import { colors } from '../theme'

type Props = { size?: number; color?: string; active?: boolean }

export function ChevronLeft({ size = 18, color = '#94A3B8' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function ChevronRight({ size = 14, color = '#334155' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M9 6L15 12L9 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function ArrowRight({ size = 18, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 12H19M13 6L19 12L13 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function Check({ size = 20, color = '#16C47F' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 12L10 17L19 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function CheckCircle({ size = 20, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function X({ size = 16, color = '#64748B' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

export function HomeIcon({ size = 22, active }: Props) {
  const c = active ? colors.primary : colors.slate500
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 9.5L12 3L21 9.5V20C21 20.6 20.6 21 20 21H15V15H9V21H4C3.4 21 3 20.6 3 20V9.5Z" fill={active ? colors.primary : 'none'} stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  )
}

export function HistoryIcon({ size = 22, active }: Props) {
  const c = active ? colors.primary : colors.slate500
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.8" />
      <Path d="M12 7V12L15 15" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  )
}

export function ScanIcon({ size = 26, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 7V5C3 3.9 3.9 3 5 3H7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Path d="M17 3H19C20.1 3 21 3.9 21 5V7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Path d="M21 17V19C21 20.1 20.1 21 19 21H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Path d="M7 21H5C3.9 21 3 20.1 3 19V17" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <Line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </Svg>
  )
}

export function CartIcon({ size = 22, active }: Props) {
  const c = active ? colors.primary : colors.slate500
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" fill={active ? colors.primary015 : 'none'} stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
      <Path d="M3 6H21" stroke={c} strokeWidth="1.8" />
      <Path d="M16 10C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 10" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  )
}

export function ProfileIcon({ size = 22, active }: Props) {
  const c = active ? colors.primary : colors.slate500
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="8" r="4" fill={active ? colors.primary015 : 'none'} stroke={c} strokeWidth="1.8" />
      <Path d="M4 20C4 16.7 7.6 14 12 14C16.4 14 20 16.7 20 20" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  )
}

export function PlusIcon({ size = 18, color = '#16C47F' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </Svg>
  )
}

export function SearchIcon({ size = 16 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="11" cy="11" r="8" stroke={colors.slate500} strokeWidth="2" />
      <Path d="M21 21L16.65 16.65" stroke={colors.slate500} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

export function FlashIcon({ size = 18, active: flash }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M13 2L4.5 14H11L10 22L20.5 10H14L13 2Z" stroke={flash ? colors.warning : 'white'} fill={flash ? colors.warning : 'none'} strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  )
}

export function NotificationIcon({ size = 18 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M18 8C18 6.4 17.4 4.8 16.2 3.6C15 2.4 13.4 1.8 11.8 2C9.4 2.2 7.4 4 7.1 6.4C6.7 9.1 8.1 11.5 10.3 12.6C8.1 13.5 6.2 15.2 5.2 17.5C5 18.1 5.4 18.8 6 19C6.5 19.2 7.1 18.9 7.4 18.4C8.7 15.7 11.3 14 14 14C16.8 14 19.3 15.7 20.6 18.4C20.9 19 21.5 19.2 22.1 18.9C22.7 18.6 22.9 18 22.7 17.4C21.7 15.1 19.8 13.5 17.6 12.6C18 11.3 18.2 9.7 18 8Z" fill={colors.slate500} />
    </Svg>
  )
}

export function EditIcon({ size = 18 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M11 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V13" stroke={colors.slate500} strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M18.5 2.5C19.3 1.7 20.7 1.7 21.5 2.5C22.3 3.3 22.3 4.7 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke={colors.slate500} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function LogoutIcon({ size = 18 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9" stroke={colors.danger} strokeWidth="2" strokeLinecap="round" />
      <Path d="M16 17L21 12L16 7" stroke={colors.danger} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Line x1="21" y1="12" x2="9" y2="12" stroke={colors.danger} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

export function EyeIcon({ size = 18, show }: Props & { show?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {show ? (
        <>
          <Path d="M17.9 17.9A10 10 0 0 1 12 20C6 20 2 12 2 12C3.5 9 5.9 6.3 8.9 5" stroke={colors.slate500} strokeWidth="1.8" strokeLinecap="round" />
          <Path d="M22 12C21 14.3 19.3 16.4 17.1 17.9M12 5C14.5 5 17 6.5 19.3 8.9" stroke={colors.slate500} strokeWidth="1.8" strokeLinecap="round" />
          <Line x1="3" y1="3" x2="21" y2="21" stroke={colors.slate500} strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <Path d="M12 5C6 5 2 12 2 12C2 12 6 19 12 19C18 19 22 12 22 12C22 12 18 5 12 5Z" stroke={colors.slate500} strokeWidth="1.8" strokeLinejoin="round" />
          <Circle cx="12" cy="12" r="3" stroke={colors.slate500} strokeWidth="1.8" />
        </>
      )}
    </Svg>
  )
}

export function DeleteIcon({ size = 20 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 6H21M8 6V4H16V6M19 6L18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20L5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function ShieldIcon({ size = 20 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M12 3L4 7V12C4 16 7.6 19.5 12 21C16.4 19.5 20 16 20 12V7L12 3Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  )
}

export function BarChartIcon({ size = 18 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 3V21M21 3V21M7 12H17M7 7H12M7 17H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

export function LayersIcon({ size = 20, color = '#16C47F' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <Path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <Path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  )
}

export function CartBagIcon({ size = 22, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <Path d="M3 6H21" stroke={color} strokeWidth="1.8" />
      <Path d="M16 10C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  )
}

export function GridIcon({ size = 22, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="3" y="3" width="18" height="18" rx="4" stroke={color} strokeWidth="1.8" />
      <Path d="M3 9H21" stroke={color} strokeWidth="1.8" />
      <Path d="M9 3V21" stroke={color} strokeWidth="1.8" />
    </Svg>
  )
}

export function ShareIcon({ size = 18 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="18" cy="5" r="3" stroke="#94A3B8" strokeWidth="1.8" />
      <Circle cx="6" cy="12" r="3" stroke="#94A3B8" strokeWidth="1.8" />
      <Circle cx="18" cy="19" r="3" stroke="#94A3B8" strokeWidth="1.8" />
      <Line x1="8.5" y1="10.5" x2="15.5" y2="6.5" stroke="#94A3B8" strokeWidth="1.8" />
      <Line x1="8.5" y1="13.5" x2="15.5" y2="17.5" stroke="#94A3B8" strokeWidth="1.8" />
    </Svg>
  )
}

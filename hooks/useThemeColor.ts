/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useAppContext } from '@/context/AppContext';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {

  const { theme } = useAppContext()

  const validTheme = theme ?? 'light';

  const colorFromProps = props[validTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[validTheme][colorName];
  }
}

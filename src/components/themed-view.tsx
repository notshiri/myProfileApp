import { View, type ViewProps } from 'react-native';

import { Colors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemeColorKey = keyof typeof Colors.light;

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColorKey;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type = 'background',
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();

  const colorPalette = (
    'colors' in theme ? theme.colors : theme
  ) as Record<ThemeColorKey, string>;

  const isDark = 'isDark' in theme ? Boolean(theme.isDark) : false;

  const backgroundColor =
    isDark && darkColor
      ? darkColor
      : !isDark && lightColor
      ? lightColor
      : colorPalette[type] ?? '#ffffff';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
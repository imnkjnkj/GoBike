/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";
import { fontStyleEnum } from "../../enums/common";
import useColorScheme from "../../hooks/useColorScheme";
import { State } from "../../redux/store";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type fontStyleProps = fontStyleEnum.Light | fontStyleEnum.SemiBold | fontStyleEnum.Medium 
export type TextProps = ThemeProps &
  DefaultText["props"] & { color?: string; size?: number; fontStyle?: fontStyleProps };
export type ViewProps = ThemeProps & DefaultView["props"];
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const HorizontalLine = (props: ViewProps) => {
  const { theme } = useSelector((state: State) => state.shared);

  return (
    <View
      style={{
        borderBottomColor: theme.text,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};

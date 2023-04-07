export interface Themes {
  [key: string]: Theme;
}
export interface Theme {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  colorLogo: string;
  colorLogoTint: string;
}
const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
export const primaryColor = "#A60321";
export const primaryColorTint = "rgba(166, 3, 33, 0.3);";
export const subPrimaryColor = "#BF1744";
export const subPrimaryTint = "rgba(191, 23, 68, 0.6);";
export const secondaryColor = "#223240";
export const primaryTintColorDark = "#B6DBF2";
export const backgroundColor = "#F2F2F2";

const themes: Themes = {
  light: {
    colorLogo: primaryColor,
    colorLogoTint: primaryColorTint,
    text: secondaryColor,
    background: backgroundColor,
    tint: primaryColor,
    tabIconDefault: secondaryColor,
    tabIconSelected: primaryColor,
  },
  dark: {
    colorLogo: subPrimaryColor,
    colorLogoTint: subPrimaryTint,
    text: backgroundColor,
    background: secondaryColor,
    tint: primaryTintColorDark,
    tabIconDefault: secondaryColor,
    tabIconSelected: subPrimaryColor,
  },
};
export default themes;

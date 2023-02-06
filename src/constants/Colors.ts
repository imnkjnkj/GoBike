export interface Themes {
  [key: string]: Theme  ;
}
export interface Theme {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  colorLogo: string;
}
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export const primaryColor = '#A60321';
export const primaryTintColor = '#BF1744';
export const secondaryColor = '#223240';
export const primaryTintColorDark = '#B6DBF2';
export const backgroundColor = '#F2F2F2';


const themes: Themes = {
  light: {
    colorLogo: primaryColor,
    text: secondaryColor,
    background: backgroundColor,
    tint: primaryColor,
    tabIconDefault: secondaryColor,
    tabIconSelected: primaryColor,
  },
  dark: {
    colorLogo: primaryTintColor,
    text: backgroundColor,
    background: secondaryColor,
    tint: primaryTintColorDark,
    tabIconDefault: secondaryColor,
    tabIconSelected: primaryTintColor,
  },
};
export default themes;
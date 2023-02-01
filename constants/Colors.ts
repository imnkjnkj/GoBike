const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export const primaryColor = '#A60321';
export const secondaryColor = '#223240';
export const backgroundColor = '#F2F2F2';


export default {
  light: {
    text: secondaryColor,
    background: backgroundColor,
    tint: primaryColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: backgroundColor,
    background: secondaryColor,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

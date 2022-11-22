import { StyleSheet, Platform } from 'react-native';

export const defaultTheme = {
  dark: false,
  colors: {
    background: '#000',
    border: '#000',
    card: 'rgb(0, 0, 0)',
    notification: 'rgb(0, 0, 0)',
    primary: 'rgb(0, 0, 0)',
    text: 'rgb(0, 0, 0)',
  },
};

export const COLORS = {
  red: '#FF4E00',
  yellow: '#FCC92E',
  green: '#26E995',
  white: '#FFFFFF',
  black_000: '#ededed',
  black_100: '#D5D6DB',
  black_200: '#BBBDC5',
  black_300: '#9294A1',
  black_400: '#6F7283',
  black_500: '#4F515F',
  black_600: '#33343C',
  black_700: '#212121',
  black_800: '#000000',
  error: '#FF3E3E',
};

export const textStyle = StyleSheet.create({
  regular10: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 13,
    fontSize: 10,
  },
  regular11: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 14,
    fontSize: 11,
  },
  regular12: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 15,
    fontSize: 12,
  },
  regular13: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 16,
    fontSize: 13,
  },
  regular14: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 19,
    fontSize: 14,
  },
  regular15: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 20,
    fontSize: 15,
  },
  regular16: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 21,
    fontSize: 16,
  },
  regular17: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 22,
    fontSize: 17,
  },
  regular18: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 23,
    fontSize: 18,
  },
  regular19: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 25,
    fontSize: 19,
  },
  regular20: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 26,
    fontSize: 20,
  },
  regular21: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 27,
    fontSize: 21,
  },
  regular22: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 28,
    fontSize: 22,
  },
  regular23: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 29,
    fontSize: 23,
  },
  regular24: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 30,
    fontSize: 24,
  },
  regular25: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 31,
    fontSize: 25,
  },
  regular26: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 32,
    fontSize: 26,
  },
  regular27: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 33,
    fontSize: 27,
  },
  regular28: {
    fontFamily: 'NotoSansKrRegular',
    lineHeight: 34,
    fontSize: 28,
  },

  medium10: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 13,
    fontSize: 10,
  },
  medium11: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 14,
    fontSize: 11,
  },
  medium12: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 15,
    fontSize: 12,
  },
  medium13: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 16,
    fontSize: 13,
  },
  medium14: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 19,
    fontSize: 14,
  },
  medium15: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 20,
    fontSize: 15,
  },
  medium16: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 21,
    fontSize: 16,
  },
  medium17: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 22,
    fontSize: 17,
  },
  medium18: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 23,
    fontSize: 18,
  },
  medium19: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 25,
    fontSize: 19,
  },
  medium20: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 26,
    fontSize: 20,
  },
  medium21: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 27,
    fontSize: 21,
  },
  medium22: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 28,
    fontSize: 22,
  },
  medium23: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 29,
    fontSize: 23,
  },
  medium24: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 30,
    fontSize: 24,
  },
  medium25: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 31,
    fontSize: 25,
  },
  medium26: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 32,
    fontSize: 26,
  },
  medium27: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 33,
    fontSize: 27,
  },
  medium28: {
    fontFamily: 'NotoSansKrMedium',
    lineHeight: 34,
    fontSize: 28,
  },

  bold10: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 13,
    fontSize: 10,
  },
  bold11: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 14,
    fontSize: 11,
  },
  bold12: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 15,
    fontSize: 12,
  },
  bold13: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 16,
    fontSize: 13,
  },
  bold14: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 19,
    fontSize: 14,
  },
  bold15: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 20,
    fontSize: 15,
  },
  bold16: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 21,
    fontSize: 16,
  },
  bold17: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 22,
    fontSize: 17,
  },
  bold18: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 23,
    fontSize: 18,
  },
  bold19: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 25,
    fontSize: 19,
  },
  bold20: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 26,
    fontSize: 20,
  },
  bold21: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 27,
    fontSize: 21,
  },
  bold22: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 28,
    fontSize: 22,
  },
  bold23: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 29,
    fontSize: 23,
  },
  bold24: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 30,
    fontSize: 24,
  },
  bold25: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 31,
    fontSize: 25,
  },
  bold26: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 32,
    fontSize: 26,
  },
  bold27: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 33,
    fontSize: 27,
  },
  bold28: {
    fontFamily: 'NotoSansKrBold',
    lineHeight: 34,
    fontSize: 28,
  },
});

// 조정필요
export const shadowStyle = StyleSheet.create(
  Platform.select({
    ios: {
      color_shadow: { shadowOpacity: 0.2 },
      white_shadow: { shadowOpacity: 0.08 },
    },
    android: {
      color_shadow: { shadowOpacity: 0.2 },
      white_shadow: { shadowOpacity: 0.08 },
    },
  }),
);

export const iconStyle = StyleSheet.create({
  icon_16: {
    width: 16,
    height: 16,
  },
  icon_24: {
    width: 24,
    height: 24,
  },
  icon_32: {
    width: 32,
    height: 32,
  },
  icon_40: {
    width: 40,
    height: 40,
  },
});

export const paddingStyle = StyleSheet.create({
  common: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});

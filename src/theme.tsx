const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#EF0E61',
  darkGrey: '#222426',
  white: '#F0F2F3',
  grey: '#36454f',
  silver: '#647072',
  black: '#1B1D1F',
};

export const theme = {
  colors: {
    background: palette.darkGrey,
    foreground: palette.white,
    dark: palette.black,
    medium: palette.grey,
    bright: palette.silver,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    xs: 6,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  fontSize: {
    s: 14,
    m: 18,
    l: 24,
    xl: 30,
    xxl: 38,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};

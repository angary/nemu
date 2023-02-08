const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#222426',
  white: '#F0F2F3',
  grey: '#36454f',
};

export const theme = {
  colors: {
    background: palette.black,
    foreground: palette.white,
    medium: palette.grey,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  fontSize: {
    s: 14,
    m: 18,
    l: 30,
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

import 'styled-components';

interface Colors {
  primary: {
    disabled: string,
    lighter: string,
    light: string,
    main: string,
    dark: string,
    darker: string,
  },
  secundary: {
    disabled: string,
    main: string,
    dark: string,
  },
  background: string,
  surface: {
    base: string,
    constrast: string,
    input: string,
  },
  lines: {
    constrast: string,
  },
  warning: string,
  text: {
    base: string,
    constrast: string,
  },
  subtext: {
    base: string,
  },
  title: {
    main: string,
    base: string,
  }
}

interface Shapes {
  borderRadius: number,
}

interface Breakpoints {
  xllarge: number,
  xlarge: number,
  large: number,
  medium: number,
  small: number,
  xsmall: number,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    unit: number,
    colors: Colors,
    shapes: Shapes,
    breakpoints: Breakpoints,
  }
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    red: string;
    white: string;
  };
  gaps: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
  };
  sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
}

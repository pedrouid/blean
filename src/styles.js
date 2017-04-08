export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '34, 34, 34',
  lightGrey: '235, 235, 235',
  darkGrey: '84, 84, 84',
  blue: '77, 183, 195',
  gold: '246, 203, 71',
  green: '79, 180, 128',
  red: '221, 69, 65'
};

export const fonts = {
  small: '12px',
  medium: '14px',
  large: '16px',
  h1: '30px',
  h2: '28px',
  h3: '24px',
  h4: '18px',
  h5: '16px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const padding = {
  sidePadding: '15px',
  bigSidePadding: '25px'
};

export const responsive = {
  xxs: {
    min: 'min-width: 319px',
    max: 'max-width: 320px'
  },
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px'
  },
  sm: {
    min: 'min-width: 767px',
    max: 'max-width: 768px'
  },
  md: {
    min: 'min-width: 991px',
    max: 'max-width: 992px'
  },
  lg: {
    min: 'min-width: 1199px',
    max: 'max-width: 1200px'
  }
};

export const globalStyles = `
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans Semibold'), local('OpenSans-Semibold'),
    url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShampu5_7CjHW5spxoeN3Vs.woff2)
    format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans'), local('OpenSans'),
    url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2)
    format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('OpenSans-Light'),
    url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRampu5_7CjHW5spxoeN3Vs.woff2)
    format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }

  html, body, #root, #router-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: ${fonts.base};
    color: rgb(${colors.dark});
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  div {
    box-sizing: border-box;
  }

  button {
    border-style: none;
    line-height: 1em;
  }
`;

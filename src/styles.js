import background from './assets/background.png';

export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '34, 34, 34',
  lightGrey: '235, 235, 235',
  darkGrey: '84, 84, 84',
  blue: '102, 173, 221',
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
    font-family: 'Avenir Next';
    font-weight: 800;
    src: local('AvenirNext-Heavy');
  }

  @font-face {
    font-family: 'Avenir Next';
    font-weight: 600;
    src: local('AvenirNext-DemiBold');
  }

  @font-face {
    font-family: 'Avenir Next';
    font-weight: 400;
    src: local('AvenirNext-Regular');
  }

  @font-face {
    font-family: 'Avenir Next';
    font-weight: 200;
    src: local('AvenirNext-UltraLight');
  }

  html, body, #root, #router-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-image: url(${background});
    background-color: rgb(${colors.white});
    font-family: 'Avenir Next', sans-serif;
    font-weight: 400;
    font-size: ${fonts.medium};
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

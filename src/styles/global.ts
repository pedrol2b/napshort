import { createGlobalStyle } from 'styled-components'
import { shade, lighten } from 'polished'

export default createGlobalStyle`
  /** */
  /* vietnamese */
  @font-face {
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/alata/v9/PbytFmztEwbIoceyzqYhQA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/alata/v9/PbytFmztEwbIocezzqYhQA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/alata/v9/PbytFmztEwbIoce9zqY.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw0aXpsog.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw9aXpsog.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw2aXpsog.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw3aXpsog.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aXo.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /** */
  :root {
    --background: ${(props) => props.theme.colors.background};
    --text: ${(props) => props.theme.colors.text};
    --scrollbar: ${(props) => props.theme.colors.scrollbar};
    --black: #21222c;
	  --blackSecondary: #414558;
	  --blackTernary: #a7abbe;
    --blackLight: hsla(230,15%,15%,5%);
	  --white: #f8f8f2;
	  --whiteSecondary: #fff;
	  --whiteLight: hsla(60,30%,96%,5%);
	  --cyan: #80ffea;
	  --cyanSecondary: #ccfff6;
	  --cyanLight: hsla(170,100%,75%,5%);
	  --green: #8aff80;
	  --greenSecondary: #d0ffcc;
	  --greenLight: hsla(115,100%,75%,5%);
	  --orange: #ffca80;
	  --orangeSecondary: #ffeacc;
	  --orangeLight: hsla(35,100%,75%,5%);
	  --pink: #ff80bf;
	  --pinkSecondary: #ffcce6;
	  --pinkLight: hsla(330,100%,75%,5%);
	  --purple: #9580ff;
	  --purpleSecondary: #d5ccff;
	  --purpleLight: hsl(250,100%,75%,5%);
	  --red: #ff9580;
	  --redSecondary: #ffd5cc;
	  --redLight: hsla(10,100%,75%,5%);
	  --yellow: #ffff80;
	  --yellowSecondary: #ffc;
	  --yellowLight: hsla(60,100%,75%,5%);
	  --cyan-transparent: rgba(128,255,234,0.1);
	  --green-transparent: rgba(138,255,128,0.1);
	  --orange-transparent: rgba(255,202,128,0.1);
	  --pink-transparent: rgba(255,128,191,0.1);
	  --purple-transparent: rgba(149,128,255,0.1);
	  --red-transparent: rgba(255,149,128,0.1);
	  --yellow-transparent: rgba(255,255,128,0.1);
	  --disabled: #6c7393;
	  --gradientDegree: 135deg;
	  --glowColor: hsla(0,0%,100%,0.25);
	  --cyan-100: rgba(128,255,234,0.1);
	  --green-100: rgba(138,255,128,0.1);
	  --orange-100: rgba(255,202,128,0.1);
	  --pink-100: rgba(255,128,191,0.1);
	  --purple-100: rgba(149,128,255,0.1);
	  --red-100: rgba(255,149,128,0.1);
	  --yellow-100: rgba(255,255,128,0.1);
	  --cyan-200: rgba(128,255,234,0.2);
	  --green-200: rgba(138,255,128,0.2);
	  --orange-200: rgba(255,202,128,0.2);
	  --pink-200: rgba(255,128,191,0.2);
	  --purple-200: rgba(149,128,255,0.2);
	  --red-200: rgba(255,149,128,0.2);
	  --yellow-200: rgba(255,255,128,0.2);
	  --cyan-300: rgba(128,255,234,0.3);
	  --green-300: rgba(138,255,128,0.3);
	  --orange-300: rgba(255,202,128,0.3);
	  --pink-300: rgba(255,128,191,0.3);
	  --purple-300: rgba(149,128,255,0.3);
	  --red-300: rgba(255,149,128,0.3);
	  --yellow-300: rgba(255,255,128,0.3);
	  --cyan-400: rgba(128,255,234,0.4);
	  --green-400: rgba(138,255,128,0.4);
	  --orange-400: rgba(255,202,128,0.4);
	  --pink-400: rgba(255,128,191,0.4);
	  --purple-400: rgba(149,128,255,0.4);
	  --red-400: rgba(255,149,128,0.4);
	  --yellow-400: rgba(255,255,128,0.4);
	  --cyan-500: rgba(128,255,234,0.5);
	  --green-500: rgba(138,255,128,0.5);
	  --orange-500: rgba(255,202,128,0.5);
	  --pink-500: rgba(255,128,191,0.5);
	  --purple-500: rgba(149,128,255,0.5);
	  --red-500: rgba(255,149,128,0.5);
	  --yellow-500: rgba(255,255,128,0.5);
	  --cyan-600: rgba(128,255,234,0.6);
	  --green-600: rgba(138,255,128,0.6);
	  --orange-600: rgba(255,202,128,0.6);
	  --pink-600: rgba(255,128,191,0.6);
	  --purple-600: rgba(149,128,255,0.6);
	  --red-600: rgba(255,149,128,0.6);
	  --yellow-600: rgba(255,255,128,0.6);
	  --cyan-700: rgba(128,255,234,0.7);
	  --green-700: rgba(138,255,128,0.7);
	  --orange-700: rgba(255,202,128,0.7);
	  --pink-700: rgba(255,128,191,0.7);
	  --purple-700: rgba(149,128,255,0.7);
	  --red-700: rgba(255,149,128,0.7);
	  --yellow-700: rgba(255,255,128,0.7);
	  --cyan-800: rgba(128,255,234,0.8);
	  --green-800: rgba(138,255,128,0.8);
	  --orange-800: rgba(255,202,128,0.8);
	  --pink-800: rgba(255,128,191,0.8);
	  --purple-800: rgba(149,128,255,0.8);
	  --red-800: rgba(255,149,128,0.8);
	  --yellow-800: rgba(255,255,128,0.8);
	  --cyan-900: rgba(128,255,234,0.9);
	  --green-900: rgba(138,255,128,0.9);
	  --orange-900: rgba(255,202,128,0.9);
	  --pink-900: rgba(255,128,191,0.9);
	  --purple-900: rgba(149,128,255,0.9);
	  --red-900: rgba(255,149,128,0.9);
	  --yellow-900: rgba(255,255,128,0.9);
	  --accentColor: var(--purple);
	  --purple-cyan: linear-gradient(var(--gradientDegree),var(--purple) 0%,var(--cyan) 100%);
	  --yellow-pink: linear-gradient(var(--gradientDegree),var(--yellow) 0%,var(--pink) 100%);
	  --cyan-green: linear-gradient(var(--gradientDegree),var(--cyan) 0%,var(--green) 100%);
	  --pink-purple: linear-gradient(var(--gradientDegree),var(--pink) 0%,var(--purple) 100%);
  }
  ::-webkit-scrollbar {
    width: 0.375rem;
    height: 0;
    scrollbar-width: 0.375rem;
  }
  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme.title === 'Dark'
        ? lighten(0.1, props.theme.colors.background)
        : shade(0.1, props.theme.colors.background)};
  }
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
  }
  body, html {
    scroll-behavior: smooth;
    min-width: 20rem;
    width: 100vw;
    height: 100vh;
  }
  body {
    user-select: none;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    white-space: normal;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 1.15;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    display: flex;
    justify-content: center;
    color: var(--text);
    background: var(--background);
    background-image: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`

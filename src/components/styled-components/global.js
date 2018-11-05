import { injectGlobal } from 'styled-components'

injectGlobal`
*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  @font-face {
      font-family: 'Roboto Mono';
      src: url('/fonts/RobotoMono-Thin.woff2') format('woff2'),
          url('/fonts/RobotoMono-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto Mono';
      src: url('/fonts/RobotoMono-Light.woff2') format('woff2'),
          url('/fonts/RobotoMono-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto Mono';
      src: url('/fonts/RobotoMono-Regular.woff2') format('woff2'),
          url('/fonts/RobotoMono-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  
  body {
    font-family: 'Roboto Mono' ,-apple-system, system-ui, 'Helvetica Neue', Arial, sans-serif;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`
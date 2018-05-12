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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
      -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  .input-range__slider {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-left: -0.5rem;
    margin-top: -0.65rem;
    outline: none;
    position: absolute;
    top: 50%;
    -webkit-transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    width: 1rem; }
    .input-range__slider:active {
      -webkit-transform: scale(1.3);
              transform: scale(1.3); }
    .input-range__slider:focus {
      box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
    .input-range--disabled .input-range__slider {
      background: #cccccc;
      border: 1px solid #cccccc;
      box-shadow: none;
      -webkit-transform: none;
              transform: none; }
  
  .input-range__slider-container {
    -webkit-transition: left 0.3s ease-out;
    transition: left 0.3s ease-out; }
  
  .input-range__label {
    color: #aaaaaa;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.8rem;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    white-space: nowrap; }
  
  .input-range__label--min,
  .input-range__label--max {
    bottom: -1.4rem;
    position: absolute; }
  
  .input-range__label--min {
    left: 0; }
  
  .input-range__label--max {
    right: 0; }
  
  .input-range__label--value {
    position: absolute;
    top: -1.8rem; }
  
  .input-range__label-container {
    display: none;
    left: -50%;
    position: relative; }
    .input-range__label--max .input-range__label-container {
      left: 50%; }
  
  .input-range__track {
    background: #eeeeee;
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.3rem;
    position: relative;
    -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;
    transition: left 0.3s ease-out, width 0.3s ease-out; }
    .input-range--disabled .input-range__track {
      background: #eeeeee; }
  
  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%; }
  
  .input-range__track--active {
    background: #333333; }
  
  .input-range {
    height: 1rem;
    position: relative;
    width: 100%; }
`
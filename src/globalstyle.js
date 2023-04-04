import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  html{
    scroll-behavior: smooth;
  }
  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  ::selection {
    background: #44628E;
    color: #fff;
  }
  ::-moz-selection {
    background: #44628E;
    color: #fff;
  }

  .a11yHidden,
  legend {
    display: inline-block;
    overflow: hidden;
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  fieldset {
    padding: 0;
  }
  button {
    cursor: pointer;
  }

  .container{
    width: 1024px;
    margin: 120px auto;
  }
`;

export default GlobalStyle;
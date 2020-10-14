import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    p, h2, h3, h4, h5, span {
        font-size: 14px;
    }

    body{
      background: transparent linear-gradient(58deg, #820081, #6b0086 11%, #310092 91%, #00009c) 0 0 no-repeat padding-box;
      background-size: cover;
      -webkit-font-smoothing: antialiased;
    }


    

`;

export const theme = {
  colors: {
    primary: "#03033A",
    secondary: "#850084",
    gradient1: "#3E018F",
    gradient2: "#7A0186",
    white: "#FFFFFF",
    text: "#333333",
    bg: "#fafafa"
  },
};

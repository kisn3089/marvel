import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Pretandard from "./PretendardVariable.ttf";

export const GlobalStyle = createGlobalStyle`
    ${reset} 
    @font-face {
        font-family: "Pretandard";
        src: url(${Pretandard}) format('truetype');
        font-style: normal;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #111;
        color: skyblue;
        font-family: "Pretandard";
    }
`;

import { createGlobalStyle } from "styled-components";

import NameOfYourFontWoff from "./Galliard Roman.woff";
import NameOfYourFontWoff2 from "./Galliard Roman.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Galliard Roman';
        src: local('FGalliard Roman'), local('Galliard Roman'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

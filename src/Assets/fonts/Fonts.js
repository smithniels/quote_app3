import { createGlobalStyle } from "styled-components";
import GaliliardRoman from "./Assets/fonts/ITC Galliard Roman.woff";
// import NameOfYourFontWoff2 from "./Assets/fonts/ITC Galliard Roman.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'GalliardRoman';
        src: local('FGalliardRoman'), local('Galliard Roman'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

import { createGlobalStyle } from "styled-components"

import fontFiles from "./Fonts"

export const FontFacesStyle = createGlobalStyle`
/* Sequel100Wide-45 - latin */
@font-face {
    font-family: 'Sequel';
    font-style: normal;
    src: url(${fontFiles.Sequel100Wide45WOFF2}) format('woff2'), /* Super Modern Browsers */
         url(${fontFiles.Sequel100Wide45WOFF}) format('woff'), /* Modern Browsers */
         url(${fontFiles.Sequel100Wide45TTF}) format("truetype"); /* Safari, Android, iOS */
}
/* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(${fontFiles.Inter400EOT}); /* IE9 Compat Modes */
  src: local(''),
       url(${fontFiles.Inter400EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
       url(${fontFiles.Inter400WOFF2}) format('woff2'), /* Super Modern Browsers */
       url(${fontFiles.Inter400WOFF}) format('woff'), /* Modern Browsers */
       url(${fontFiles.Inter400TTF}) format('truetype'), /* Safari, Android, iOS */
       url(${fontFiles.Inter400SVG}#Inter) format('svg'); /* Legacy iOS */
}
/* inter-500 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url(${fontFiles.Inter500EOT}); /* IE9 Compat Modes */
  src: local(''),
       url(${fontFiles.Inter500EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
       url(${fontFiles.Inter500WOFF2}) format('woff2'), /* Super Modern Browsers */
       url(${fontFiles.Inter500WOFF}) format('woff'), /* Modern Browsers */
       url(${fontFiles.Inter500TTF}) format('truetype'), /* Safari, Android, iOS */
       url(${fontFiles.Inter500SVG}#Inter) format('svg'); /* Legacy iOS */
}
/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url(${fontFiles.Inter700EOT}); /* IE9 Compat Modes */
  src: local(''),
       url(${fontFiles.Inter700EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
       url(${fontFiles.Inter700WOFF2}) format('woff2'), /* Super Modern Browsers */
       url(${fontFiles.Inter700WOFF}) format('woff'), /* Modern Browsers */
       url(${fontFiles.Inter700TTF}) format('truetype'), /* Safari, Android, iOS */
       url(${fontFiles.Inter700SVG}#Inter) format('svg'); /* Legacy iOS */
}
`

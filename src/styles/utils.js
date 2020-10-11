import { css } from "styled-components"


/**
 * @param {Array<number>} VWs Array containing view width ranges numbers (or breakpoints)
 * @param {Array<number>} FSs Array containing font-size numbers corresponsding to the view width ranges
 * @param {string=} unit The base unit used for calculation like: px/rem/em or vw/vh to create blackholes
 */
export const fluidType = function ( VWs, FSs, unit="px" ) {

    if ( VWs.length !== FSs.length || VWs.length < 2 || FSs.length < 2 ) {
        return "";
    }

    let c
    let fluidCss = `
        font-size: ${FSs[0]}${unit};
    `
    for (c = 0; c < FSs.length - 1; c++) {
        fluidCss += `
            @media(min-width: ${VWs[c]}${unit}) {
                font-size: calc( ${FSs[c]}${unit} + ${FSs[c+1] - FSs[c]} * ( ( 100vw - ${VWs[c]}${unit} ) / ${VWs[c+1] - VWs[c]} ) );
            }
        `
    }
    fluidCss += `
        @media(min-width: ${VWs[c]}${unit}) {
            font-size: ${FSs[c]}${unit};
        }
    `

    return css`${fluidCss}`

}
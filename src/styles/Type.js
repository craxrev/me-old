import { css } from "styled-components"

import { fluidType, responsiveType } from "./utils"


// TODO: add fallback fonts

export const fontFamilies = {
    header: "'Sequel', Sans-serif",
    content: "'Inter', Sans-serif"
}

export const fontWeights = {
    regular: 400,
    medium: 500,
    bold: 700
}

// Elements

export const header = css`
    font-family: ${fontFamilies.header};
`

export const body = css`
    font-family: ${fontFamilies.content};
`

export const menu = {
    a: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        font-size: 18px;
        line-height: 1.5em;
        text-decoration: none;
    `,
    email: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};    
        font-size: 18px;
        line-height: 1.5em;
    `
}

export const menuResponsive = {
    toggler: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768], [14, 18])}
        line-height: 1.5em;
        text-decoration: none;
    `,
    a: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768], [40, 60])}
        line-height: 1.2em;
        text-decoration: none;
    `,
    email: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768], [14, 18])}
        line-height: 1.5em;
    `,
    socials: css`
        font-family: ${fontFamilies.content};
        font-weight: ${fontWeights.regular};
        font-size: 12px;
        line-height: 1.08em;
        text-decoration: none;
    `
}

export const homeHero = {
    h6: css`
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768, 1920], [8, 10, 12])}
        line-height: 1.15em;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        @media(min-width: 768px) {
            letter-spacing: 0.15em;
        }
    `,
    h1: css`
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768, 1920], [40, 80, 150])}
        line-height: 1em;
        text-transform: uppercase;
    `,
    h4: css`
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768, 1920], [10, 18, 25])}
        line-height: 1em;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    `,
    p: css`
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768, 1920], [12, 14, 12])}
        line-height: 1.5em;
    `
}

export const homeProjects = {
    header: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${responsiveType([375, 768], [12, 14])};
        line-height: 1.5em;
        text-transform: uppercase;
        letter-spacing: 0.15em;
    `,
    footer: css`
        font-family: ${fontFamilies.content};
        font-weight: ${fontWeights.regular};
        ${responsiveType([375, 768, 1920], [12, 14, 18])}
        line-height: 1.5em;
    `,
    number: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${responsiveType([375, 768], [10, 14])}
        line-height: 1.5em;
    `,
    title: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        ${fluidType([375, 768, 1920], [30, 60, 100])}
        line-height: 1.08em;
        text-transform: uppercase;
    `,
    category: css`
        font-family: ${fontFamilies.header};
        font-weight: ${fontWeights.regular};
        font-size: 14px;
        line-height: 1.5em;
        text-transform: uppercase;
        letter-spacing: 0.15em;
    `
}

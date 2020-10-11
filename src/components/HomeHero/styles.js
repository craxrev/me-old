import styled from "styled-components"

import { homeHero } from "../../styles/Type"


export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const H6 = styled.h6`
    ${homeHero.h6}
    text-align: center;
    color: var(--text-alt);
    margin-top: 0;
    margin-bottom: 16px;

    @media(min-width: 768px) {
        margin-top: 80px;
        margin-bottom: 20px;
    }
    @media(min-width: 980px) {
        margin-bottom: 4px;
    }
`

export const H1 = styled.h1`
    ${homeHero.h1}
    text-align: center;
    color: var(--text);
    margin-bottom: 12px;
    
    @media(min-width: 768px) {
        margin-bottom: 24px;
    }
    @media(min-width: 980px) {
        margin-bottom: 24px;
    }
`

export const H4 = styled.h4`
    ${homeHero.h4}
    text-align: center;
    color: var(--text);
    margin-bottom: 100px;
    
    @media(min-width: 768px) {
        margin-bottom: 135px;
    }
    @media(min-width: 980px) {
        margin-bottom: 132px;
    }
`

export const P = styled.p`
    ${homeHero.p}
    text-align: center;
    color: var(--text);
    margin-left: auto;
    margin-right: auto;
    max-width: 271px;

    @media(min-width: 768px) {
        max-width: 418px;
    }
    @media(min-width: 980px) {
        max-width: 580px;
    }
`

export const Svg = styled.svg`
    text-align: center;
    margin: 30px auto 0;
    display: none;
    @media(min-width: 980px) {
        display: block;
    }
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

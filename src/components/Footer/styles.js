import styled from "styled-components"

import { Link } from "gatsby"

import { globalHorizontalMargin } from "../../styles/Sizes"
import { footer } from "../../styles/Type"


export const Footer = styled.footer`

    margin-top: 120px;
    padding-left: ${globalHorizontalMargin.mobile};
    padding-right: ${globalHorizontalMargin.mobile};
    padding-top: 46px;
    padding-bottom: 40px;
    background-color: var(--bg-footer);

    @media(min-width: 768px) {
        margin-top: 356px;
        padding-left: ${globalHorizontalMargin.tablet};
        padding-right: ${globalHorizontalMargin.tablet};
        padding-top: 68px;
        padding-bottom: 68px;
    }

    @media(min-width: 980px) {
        margin-top: 328px;
        padding-left: ${globalHorizontalMargin.desktop};
        padding-right: ${globalHorizontalMargin.desktop};
        padding-top: 180px;
        padding-bottom: 62px;
    }
`

export const Content = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 74px;
    margin-top: -34px;

    @media (min-width: 768px) {
        margin-top: -42px;
    }
`

export const Main = styled.main`
    margin-right: 4.22%;
    margin-top: 34px;

    @media (min-width: 768px) {
        margin-top: 42px;
    }
`

export const Header = styled.h4`
    ${footer.emailHeader}
    color: var(--text-alt);
`

export const Email = styled.a`
    ${footer.email}
    color: var(--text);
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 374px;
    margin-right: 8.44%;
    margin-top: 34px;

    @media (min-width: 768px) {
        margin-top: 42px;
    }
`

export const Pages = styled.div`
    display: flex;
    flex-direction: column;
`

export const PageLink = styled(Link)`
    ${footer.a}
    margin-bottom: 16px;
    color: var(--text);

    &[aria-current] {
        text-decoration: underline;
    }
`

export const Socials = styled.section`
    display: flex;
    flex-direction: column;
`

export const A = styled.a`
    ${footer.a}
    margin-bottom: 16px;
    color: var(--text);
`

export const Other = styled.div`
    display: flex;
    flex-direction: column;
`

export const Svg = styled.svg`
    position: absolute;
    right: 0;
    top: 34px;

    @media (min-width: 768px) {
        top: 42px;
    }
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

export const Copyrights = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: solid 1px var(--text-alt);
    padding-top: 25px;
    padding-bottom: 4px;
    margin-top: -4px;

    @media (min-width: 980px) {
        padding-top: 50px;
    }
`

export const LeftText = styled.h4`
    ${footer.copyrights}
    margin-top: 4px;
    margin-right: 6px;
    color: var(--text);
`

export const RightText = styled.h4`
    ${footer.copyrights}
    margin-top: 4px;
    color: var(--text);
`

export const Info = styled.h6`
    ${footer.info}
    color: var(--text);
`

export const inlineA = styled.a`
    color: inherit;
`

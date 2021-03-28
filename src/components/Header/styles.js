import styled from "styled-components"

import { Link } from "gatsby"

import { navVerticalMargin } from "../../styles/Sizes"
import { menu, menuResponsive } from "../../styles/Type"


/* Desktop version */

export const Header = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${navVerticalMargin.mobile};
    margin-bottom: ${navVerticalMargin.mobile};
    @media (min-width: 768px) {
        margin-top: ${navVerticalMargin.tablet};
        margin-bottom: ${navVerticalMargin.tablet};
    }
    @media (min-width: 980px) {
        margin-top: ${navVerticalMargin.desktop};
        margin-bottom: ${navVerticalMargin.desktop};
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex: 0 1 34%;
    max-width: 385px;
`

export const Email = styled.a`
    flex: 0 1 34%;
    max-width: 385px;
    text-align: right;
    ${menu.email}
    color: var(--text);
`

export const Button = styled.button`

`

export const A = styled(Link)`
    ${menu.a}
    color: var(--text);
    &.active {
        color: var(--text-alt);
        text-decoration: underline;
    }
`


/* Responsive version */

export const HeaderR = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: ${navVerticalMargin.mobile};
    padding-bottom: ${navVerticalMargin.mobile};
    
    @media (min-width: 768px) {
        padding-top: ${navVerticalMargin.tablet};
        padding-bottom: ${navVerticalMargin.tablet};
    }
    @media (min-width: 980px) {
        padding-top: ${navVerticalMargin.desktop};
        padding-bottom: ${navVerticalMargin.desktop};
    }
`

export const MenuToggler = styled.a`
    color: var(--text);
    z-index: 2;
`


export const HeaderRContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    &[open]{
        display: flex;
    }
    z-index: 1;
`

export const NavR = styled.nav`
    display: flex;
    flex-direction: column;
`

export const AR = styled(Link)`
    ${menuResponsive.a}
    margin-top: 14px;
    margin-bottom: 14px;
    color: var(--text);
    &.active {
        color: var(--text-alt);
        text-decoration: underline;
    }
    @media(min-width: 768px) {
        margin-top: 18px;
        margin-bottom: 18px;
    }
    &:first-child {
        margin-top: 14vh;
    }
    &:last-child {
        margin-bottom: 70px;
        @media(min-width: 768px) {
            margin-bottom: 108px;
        }
    }
`

export const EmailR = styled.a`
    ${menuResponsive.email}
    margin-bottom: 38px;
    color: var(--text);
`


export const Socials = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 146px;
    @media(min-width: 768px) {
        width: 255px;
    }
`

export const Social = styled(Link)`
    ${menuResponsive.socials}
    color: var(--text);
`
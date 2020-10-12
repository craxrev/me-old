import styled from "styled-components"

import { Link } from "gatsby"

import { navMarginVerticalDesktop } from "../../styles/Sizes"
import { menu } from "../../styles/Type"

export const Header = styled.header`
    position: absolute;
    justify-content: space-between;
    width: 100%;
    margin-top: ${navMarginVerticalDesktop};
    margin-bottom: ${navMarginVerticalDesktop};
    display: none;
    @media(min-width: 980px) {
        display: flex;
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
    &[aria-current] {
        color: var(--text-alt);
        text-decoration: underline;
    }
`
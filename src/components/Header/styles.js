import styled from "styled-components"

import { Link } from "gatsby"

import { navMarginVerticalDesktop } from "../../styles/Sizes"

export const Header = styled.header`
    margin-top: ${navMarginVerticalDesktop};
    margin-bottom: ${navMarginVerticalDesktop};
`

export const Nav = styled.nav`

`

export const A = styled(Link)`
    font-family: "Sequel";
    font-size: 1.125em;
    font-weight: 400;
    text-decoration: none;
`

export const Email = styled.a`
    font-family: "Sequel";
    font-size: 1.125em;
    font-weight: 400;
`

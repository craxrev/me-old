import styled from "styled-components"

import { Link } from "gatsby"

import { page, projects } from "../../styles/Type"


export const Section = styled.section`
    
`

export const Header = styled.h5`
    ${projects.header}
    margin-bottom: 13px;
    color: var(--text);

    @media(min-width: 768px) {
        margin-bottom: 20px;
    }
    @media(min-width: 980px) {
        margin-bottom: 50px;
    }
`

export const PageHeader = styled.h1`
    ${page.title}
    padding: 100px 0 44px;
    @media(min-width: 768px) {
        padding: 200px 0 120px;
    }
    @media(min-width: 980px) {
        padding: 270px 0 180px;
    }
    text-align: center;
    color: var(--text);
`

export const Main = styled.main`
    
`

export const Footer = styled(Link)`
    ${projects.footer}
    float: right;
    margin-top: 42px;
    color: var(--text);
    @media(min-width: 980px) {
        margin-top: 67px;
    }
`

export const Svg = styled.svg`
    vertical-align: middle;
    margin-left: 15px;
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

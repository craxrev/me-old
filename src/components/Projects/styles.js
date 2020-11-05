import styled from "styled-components"

import { Link } from "gatsby"

import { projects } from "../../styles/Type"


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

export const Main = styled.main`
    
`

export const Thumbnail = styled.img`
    position: absolute;
    right: 0;
    top: -200px;
    z-index: 1;
    opacity: 0;
    transform: translateX(-200px);
    transition:
        transform 500ms ease-in-out,
        opacity 500ms ease-in-out;
    pointer-events: none;
`

export const Project = styled.article`
    position: relative;

    border-top: solid 1px var(--text-alt);
    border-left: none;
    border-right: none;

    &:last-child {
        border-bottom: solid 1px var(--text-alt);
    }

    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 22px;

    @media(min-width: 768px) {
        padding-top: 34px;
        padding-bottom: 34px;
        padding-left: 44px;
    }
    @media(min-width: 980px) {
        padding-top: 54px;
        padding-bottom: 54px;
    }

    ${({active}) => active && `
        ${Thumbnail} {
            opacity: 1;
            transform: translateX(0);
        }
    `}

`

export const Number = styled.p`
    ${projects.number}
    position: absolute;
    left: 0;
    color: var(--text);
`

export const Title = styled.h1`
    ${projects.title}
    

    color: var(--text);

`

export const Category = styled.h3`
    ${projects.category}
    margin-left: 4px;
    margin-top: 10px;
    color: var(--text-alt);
    
    @media(max-width: 768px) {
        display: none;
    }
    @media(min-width: 980px) {
        margin-left: 8px;
        margin-top: 16px;
    }
    
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

import styled from "styled-components"

import { Link } from "gatsby"

import { homeArticles } from "../../styles/Type"


export const Section = styled.section`
    margin-top: 95px;

    &:after { // clearfix
        content: ".";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }

    @media(min-width: 980px) {
        margin-top: 300px;
    }
    
`

export const Header = styled.h5`
    ${homeArticles.header}
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: solid 1px var(--text-alt);
`

export const Article = styled.article`

    flex-basis: 100%;
    margin-top: 44px;

    @media(min-width: 768px) {
        margin-top: 75px;
    }
    @media(min-width: 980px) {
        flex-basis: 46%;
        margin-top: 62px;
    }
`

export const Thumb = styled.img`
    width: 100%;
`

export const Category = styled.h6`
    ${homeArticles.category}
    margin-top: 25px;
    color: var(--text-alt);

    @media(min-width: 768px) {
        margin-top: 32px;
    }
`

export const Title = styled.h4`
    ${homeArticles.title}
    color: var(--text);
`

export const Footer = styled(Link)`
    ${homeArticles.footer}
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

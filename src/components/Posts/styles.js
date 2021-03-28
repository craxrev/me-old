import styled, { css } from "styled-components"

import { Link } from "gatsby"

import { posts, page } from "../../styles/Type"


export const Section = styled.section`
    ${props => props.home&& css`
        margin-top: 95px;
        @media(min-width: 980px) {
            margin-top: 300px;
        }
    `}

    &:after { // clearfix
        content: ".";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }
`

export const Header = styled.h5`
    ${posts.header}
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

export const Thumbnail = styled.img`
    width: 100%;
    max-height: 531px;
`

export const Category = styled.h6`
    ${posts.category}
    margin-top: 25px;
    color: var(--text-alt);

    @media(min-width: 768px) {
        margin-top: 32px;
    }
`

export const Title = styled.h4`
    ${posts.title}
    color: var(--text);
`

export const Footer = styled(Link)`
    ${posts.footer}
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

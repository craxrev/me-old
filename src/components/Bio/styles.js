import styled from "styled-components"

import { bio } from "../../styles/Type"

export const Bio = styled.div`
    padding-top: 140px;
    @media (min-width: 768px) {
        padding-top: 190px;
    }
    @media (min-width: 980px) {
        padding-top: 252px;
    }
`

export const Name = styled.h1`
    ${bio.name}
    text-align: center;
    color: var(--text);
`

export const Image = styled.div`
    display: flex;
    justify-content: center;

    padding-bottom: 86px;
    @media (min-width: 768px) {
        padding-bottom: 102px;
    }
    @media (min-width: 980px) {
        padding-bottom: 132px;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    width: 1100px;
    max-width: 100%;
    margin: 0 auto;
    flex-direction: column;
    @media (min-width: 980px) {
        flex-direction: row;
    }

    margin-bottom: 102px;
    @media (min-width: 980px) {
        margin-bottom: 150px;
    }
`

export const Title = styled.h3`
    ${bio.title}
    color: var(--text-alt);
    margin-bottom: 30px;
    @media (min-width: 980px) {
        margin-bottom: 0;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 736px;
    max-width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (min-width: 980px) {
        padding-left: 20px;
        margin-left: auto;
    }
`

export const Paragraph = styled.p`
    ${bio.paragraph}
    white-space: break-spaces;
    color: var(--text);
`

export const Column = styled.div`
    margin-bottom: 46px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const Header = styled.h4`
    margin-bottom: 10px;
    @media (min-width: 768px) {
        margin-bottom: 30px;
    }

    ${bio.header}
    color: var(--text);
`

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    ${bio.list}
    color: var(--text);
    li {
        margin-bottom: 12px;
        @media (min-width: 768px) {
            margin-bottom: 14px;
        }
        @media (min-width: 980px) {
            margin-bottom: 18px;
        }
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 415px;
    max-width: 100%;
`

export const Link = styled.a`
    display: inline-block;
    ${bio.link}
    color: var(--text);
`

export const LinkSvg = styled.svg`
    margin-left: 8px;
    vertical-align: middle;
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

import styled from "styled-components"
import { Link } from "gatsby"

import { post } from "../../styles/Type"
import { globalHorizontalMargin } from "../../styles/Sizes"

export const Header = styled.div`
    padding: 153px 0 54px;
    @media (min-width: 768px) {
        padding: 240px 0 95px;
    }
    @media (min-width: 980px) {
        padding: 240px 0 177px;
    }
    max-width: 1256px;
    margin: 0 auto;
    text-align: center;
    color: var(--text);
`

export const Category = styled.h6`
    ${post.category}
    margin-bottom: 15px;
    color: var(--text-alt);
`

export const Title = styled.h1`
    ${post.title}
    margin-bottom: 24px;
    @media (min-width: 768px) {
        margin-bottom: 52px;
    }
`

export const Info = styled.h5`
    ${post.info}
    margin-bottom: 9px;
`

export const Tags = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin-bottom: 60px;
`

export const Tag = styled(Link)`
    ${post.tag}
    display: block;
    padding: 10px 13px;
    margin: 0 12px 12px 0;
    box-shadow: 0 0 0 1px var(--text-alt);
    color: var(--text);
`

export const Cover = styled.img`
    margin: 0 -${globalHorizontalMargin.mobile};
    max-width: 100vw;
    @media (min-width: 768px) {
        margin: 0 -${globalHorizontalMargin.tablet};
    }
    @media (min-width: 980px) {
        max-width: 100%;
        margin: 0;
    }
`

export const Article = styled.article`
    max-width: 784px;
    margin: 0 auto;
    & > * {
        display: block;
    }
    p,
    ul {
        margin: 20px 0;
    }
    h2 {
        ${post.article.h2}
        margin: 64px 0 36px;
    }
    p {
        ${post.article.text}
    }
    q {
        ${post.article.q}
        margin: 40px 0;
        @media (min-width: 768px) {
            margin: 62px 0;
        }
        @media (min-width: 980px) {
            margin: 92px 0;
        }
        quotes: "“" "”" "‘" "’";
    }
    ul {
        list-style: square;
        padding-left: 18px;
        li {
            ${post.article.text}
            margin: 10px 0;
        }
    }
    img {
        margin: 67px 0;
        max-width: 100%;
    }
    color: var(--text);
`

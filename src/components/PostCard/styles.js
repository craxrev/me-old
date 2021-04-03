import styled from "styled-components"

import { postCard } from "../../styles/Type"


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
    ${postCard.category}
    margin-top: 25px;
    color: var(--text-alt);

    @media(min-width: 768px) {
        margin-top: 32px;
    }
`

export const Title = styled.h4`
    ${postCard.title}
    color: var(--text);
`


import styled from "styled-components"

import { fourOwFour } from "../../styles/Type"

export const Content = styled.p`
    display: block;
    ${fourOwFour.text}
    padding-top: 140px;
    @media (min-width: 768px) {
        padding-top: 190px;
    }
    @media (min-width: 980px) {
        padding-top: 252px;
    }
    color: var(--text);
`

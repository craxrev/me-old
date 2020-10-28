import styled from "styled-components"

import { globalHorizontalMargin } from "../styles/Sizes"


export const Wrapper = styled.div`

    position: relative;

    margin-left: ${globalHorizontalMargin.mobile};
    margin-right: ${globalHorizontalMargin.mobile};

    @media(min-width: 768px) {
        margin-left: ${globalHorizontalMargin.tablet};
        margin-right: ${globalHorizontalMargin.tablet};
    }

    @media(min-width: 980px) {
        margin-left: ${globalHorizontalMargin.desktop};
        margin-right: ${globalHorizontalMargin.desktop};
    }

    @media(min-width: 1920px) {
    }
`

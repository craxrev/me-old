import styled from "styled-components"

import { globalHorizontalMargin, containerWidth } from "../styles/Sizes"


export const Wrapper = styled.div`

    position: relative;

    padding-left: ${globalHorizontalMargin.mobile};
    padding-right: ${globalHorizontalMargin.mobile};

    @media(min-width: 768px) {
        padding-left: ${globalHorizontalMargin.tablet};
        padding-right: ${globalHorizontalMargin.tablet};
    }

    @media(min-width: 980px) {
        padding-left: ${globalHorizontalMargin.desktop};
        padding-right: ${globalHorizontalMargin.desktop};
        margin: 0 auto;
        max-width: ${containerWidth};
    }

    @media(min-width: 1920px) {
    }
`

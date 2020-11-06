import styled from "styled-components"

import { projectOverview } from "../../styles/Type"

import { globalHorizontalMargin } from "../../styles/Sizes"
import { navVerticalMargin } from "../../styles/Sizes"


export const ProjectOverview = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg);
    z-index: 1;

    padding-left: ${globalHorizontalMargin.mobile};
    padding-right: ${globalHorizontalMargin.mobile};

    @media(min-width: 768px) {
        padding-left: ${globalHorizontalMargin.tablet};
        padding-right: ${globalHorizontalMargin.tablet};
    }

    @media(min-width: 980px) {
        padding-left: ${globalHorizontalMargin.desktop};
        padding-right: ${globalHorizontalMargin.desktop};
    }

    @media(min-width: 1920px) {
    }
`

export const Header = styled.header`
    margin-top: ${navVerticalMargin.mobile};
    margin-bottom: ${navVerticalMargin.mobile};
    @media (min-width: 768px) {
        margin-top: ${navVerticalMargin.tablet};
        margin-bottom: ${navVerticalMargin.tablet};
    }
    @media (min-width: 980px) {
        margin-top: ${navVerticalMargin.desktop};
        margin-bottom: ${navVerticalMargin.desktop};
    }
`

export const Back = styled.p`
    display: inline-block;
    ${projectOverview.back}
    cursor: pointer;
`

export const Svg = styled.svg`
    margin-right: 9px;
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

export const Main = styled.main`

`

export const Text = styled.section`

`

export const Title = styled.h3`
    ${projectOverview.title}
    color: var(--text);
`

export const Description = styled.p`
    ${projectOverview.description}
    color: var(--text);
`

export const Website = styled.a`
    ${projectOverview.website}
    color: var(--text);
`

export const Thumbnail = styled.img`

`


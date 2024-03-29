import styled from "styled-components"

import { project } from "../../styles/Type"

import { globalHorizontalMargin } from "../../styles/Sizes"
import { navVerticalMargin } from "../../styles/Sizes"


export const Project = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: var(--bg);
    z-index: 1;
    overflow: auto;
    overflow-x: hidden;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: ${globalHorizontalMargin.mobile};
    margin-right: ${globalHorizontalMargin.mobile};

    &:after {
        flex: 0 0 ${navVerticalMargin.mobile};
    }

    @media(min-width: 768px) {
        margin-left: ${globalHorizontalMargin.tablet};
        margin-right: ${globalHorizontalMargin.tablet};

        &:after {
            flex: 0 0 ${navVerticalMargin.tablet};
        }
    }

    @media(min-width: 980px) {
        margin-left: ${globalHorizontalMargin.desktop};
        margin-right: ${globalHorizontalMargin.desktop};

        &:after {
            flex: 0 0 ${navVerticalMargin.desktop};
        }
    }

    @media(min-width: 1920px) {
    }

    &:after {
        content: '';
    }
`;

export const Header = styled.header`
    padding-top: ${navVerticalMargin.mobile};
    padding-bottom: ${navVerticalMargin.mobile};
    @media (min-width: 768px) {
        padding-top: ${navVerticalMargin.tablet};
        padding-bottom: ${navVerticalMargin.tablet};
    }
    @media (min-width: 980px) {
        padding-top: ${navVerticalMargin.desktop};
        padding-bottom: ${navVerticalMargin.desktop};
    }
`

export const Back = styled.p`
    display: inline-block;
    ${project.back}
    color: var(--text);
    cursor: pointer;
    text-decoration: underline;
`

export const BackSvg = styled.svg`
    margin-right: 9px;
`

export const WebsiteSvg = styled.svg`
    margin-left: 8px;
    vertical-align: middle;
`

export const Path = styled.path`
    stroke: var(--text);
    stroke-width: 2px;
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 980px) {
        flex-direction: row;
    }
`

export const Text = styled.section`
    order: 1;
    margin-top: 102px;
    @media (min-width: 768px) {
        margin-top: 128px;
    }
    @media (min-width: 980px) {
        order: 0;
        margin-top: 0;
        align-self: flex-end;
        max-width: 602px;
    }
`

export const Title = styled.h3`
    ${project.title}
    color: var(--text);
`

export const Description = styled.p`
    ${project.description}
    margin-top: 7px;
    @media (min-width: 768px) {
        margin-top: 16px;
    }
    color: var(--text);
`

export const Website = styled.a`
    display: inline-block;
    ${project.website}
    margin-top: 35px;
    @media (min-width: 768px) {
        margin-top: 66px;
    }
    @media (min-width: 980px) {
        margin-top: 102px;
    }
    color: var(--text);
`

export const Thumbnail = styled.div`
    position: relative;
    align-self: center;
    max-width: 80%;
    @media (min-width: 768px) {
        max-width: 66%;
    }
    @media (min-width: 980px) {
        max-width: 50%;
    }
    width: 400px;
    height: 400px;
    @media (min-width: 980px) {
        width: 600px;
        height: 600px;
    }
    background-color: var(--img-bg);

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        max-width: 150%;
        max-height: 150%;
        transform: translate(-50%, -50%);
    }
`


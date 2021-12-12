import styled from "styled-components"

import { projectCard } from "../../styles/Type"


export const Thumbnail = styled.div`
    display: none;
    @media(min-width: 980px) {
        display: block;
    }
    position: absolute;
    right: 0;
    top: -200px;
    max-width: 50%;
    width: 600px;
    height: 600px;
    opacity: 0;
    background-color: var(--img-bg);
    transform: translateX(-200px);
    transition:
        transform 500ms ease-in-out,
        opacity 500ms ease-in-out;
    pointer-events: none;
    z-index: 1;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const ProjectCard = styled.article`
    position: relative;

    border-top: solid 1px var(--text-alt);
    border-left: none;
    border-right: none;

    &:last-child {
        border-bottom: solid 1px var(--text-alt);
    }

    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 22px;

    @media(min-width: 768px) {
        padding-top: 34px;
        padding-bottom: 34px;
        padding-left: 44px;
    }
    @media(min-width: 980px) {
        padding-top: 54px;
        padding-bottom: 54px;
    }

    ${({active}) => active && `
        ${Thumbnail} {
            opacity: 1;
            transform: translateX(0);
        }
    `}

    cursor: pointer;

`

export const Number = styled.p`
    ${projectCard.number}
    position: absolute;
    left: 0;
    color: var(--text);
`

export const Title = styled.h1`
    ${projectCard.title}

    color: var(--text);

`

export const Category = styled.h3`
    ${projectCard.category}
    margin-left: 4px;
    margin-top: 10px;
    color: var(--text-alt);
    
    @media(max-width: 768px) {
        display: none;
    }
    @media(min-width: 980px) {
        margin-left: 8px;
        margin-top: 16px;
    }
    
`

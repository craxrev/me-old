import styled from "styled-components"

export const CursorItself = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: var(--text);
    z-index: 10000;
    pointer-events: none;
    mix-blend-mode: difference;
`

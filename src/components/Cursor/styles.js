import styled from "styled-components"

export const CursorWrapper = styled.div`
    position: fixed;
    z-index: 10000;
    pointer-events: none;
    mix-blend-mode: difference;
`

export const CursorItself = styled.div`
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: var(--text);
`

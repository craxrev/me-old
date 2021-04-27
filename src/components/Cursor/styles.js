import styled from "styled-components"

export const CursorWrapper = styled.div`
    position: fixed;
    z-index: 10000;
    pointer-events: none;
    mix-blend-mode: difference;
`

export const CursorCompanion = styled.div`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--text-alt);
`

export const CursorItself = styled.div`
    position: absolute;
    left: -5px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--text);
`

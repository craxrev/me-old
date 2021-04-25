import styled from "styled-components"

export const CursorItself = styled.div`
    position: fixed;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: white;
    z-index: 10000;
    pointer-events: none;
`

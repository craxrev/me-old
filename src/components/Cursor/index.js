import React, { useEffect, useRef } from "react"

import CustomCursor from "./CustomCursor"

import {
    CursorWrapper,
    CursorCompanion,
    CursorItself,
    CursorTransition,
} from "./styles"

const Cursor = () => {
    const wrapperRef = useRef()

    useEffect(() => {
        const { render, destroy } = CustomCursor(wrapperRef.current)
        render()

        return () => destroy()
    }, [])

    return (
        <CursorWrapper ref={wrapperRef}>
            <CursorCompanion />
            <CursorItself>
                <CursorTransition>
                    <div />
                    <div />
                </CursorTransition>
            </CursorItself>
        </CursorWrapper>
    )
}

export default Cursor

import React, { useEffect, useRef } from "react"

import CustomCursor from "./CustomCursor"

import { CursorWrapper, CursorCompanion, CursorItself } from "./styles"

const Cursor = () => {
    const wrapperRef = useRef()

    useEffect(() => {
        // TODO: extract helper functions
        // TODO: extract configurations & variables
        // TODO: make some configuration optional
        const { render, destroy } = CustomCursor(wrapperRef.current)
        render()

        return () => destroy()
    }, [])

    return (
        <CursorWrapper ref={wrapperRef}>
            <CursorCompanion />
            <CursorItself />
        </CursorWrapper>
    )
}

export default Cursor

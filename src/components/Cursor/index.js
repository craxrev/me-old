import React, { useEffect, useRef } from "react"

import { CursorItself } from "./styles"

const Cursor = () => {
    const cursorRef = useRef()

    useEffect(() => {
        if (cursorRef.current) {
            let timeout
            let timeup = true
            const cursorEl = cursorRef.current
            const pos = {
                x: undefined,
                y: undefined,
            }

            document.body.classList &&
                !document.body.classList.contains("custom-cursor") &&
                document.body.classList.add("custom-cursor")

            const onMouseMove = e => {
                pos.x = e.pageX
                pos.y = e.pageY
                cursorEl.style.left = `${pos.x}px`
                cursorEl.style.top = `${pos.y - window.scrollY}px`
                if (timeup) {
                    timeup = false
                    onMouseMoveStart()
                }
                if (timeout) {
                    clearTimeout(timeout)
                }
                timeout = setTimeout(() => {
                    onMouseMoveEnd()
                    timeup = true
                }, 200)
            }
            const onMouseMoveStart = () => {
                console.log("onMouseMoveStart")
            }
            const onMouseMoveEnd = () => {
                console.log("onMouseMoveEnd")
            }
            const onMouseDown = () => {
                console.log("onMouseDown")
            }
            const onMouseUp = () => {
                console.log("onMouseUp")
            }
            const onMouseLeave = () => {
                console.log("onMouseLeave")
            }
            const onMouseEnter = () => {
                console.log("onMouseEnter")
            }

            window.addEventListener("mousemove", onMouseMove)
            window.addEventListener("mousedown", onMouseDown)
            window.addEventListener("mouseup", onMouseUp)
            window.addEventListener("mouseleave", onMouseLeave)
            window.addEventListener("mouseenter", onMouseEnter)

            return () => {
                window.removeEventListener("mousemove", onMouseMove)
                window.removeEventListener("mousedown", onMouseDown)
                window.removeEventListener("mouseup", onMouseUp)
                window.removeEventListener("mouseleave", onMouseLeave)
                window.removeEventListener("mouseenter", onMouseEnter)
            }
        }
    }, [])

    return <CursorItself ref={cursorRef} />
}

export default Cursor

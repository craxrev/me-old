import React, { useEffect, useRef } from "react"

import { CursorWrapper, CursorItself } from "./styles"

const Cursor = () => {
    const cursorRef = useRef()

    useEffect(() => {
        if (cursorRef.current) {
            let timeout
            let timeup = true
            const cursorEl = cursorRef.current

            const ease = 0.2
            const pos = {
                x: 0,
                y: 0,
            }
            const cursorPos = {
                x: 200,
                y: 200,
            }
            const skew = {
                x: 0,
                y: 0,
            }

            document.body.classList &&
                !document.body.classList.contains("custom-cursor") &&
                document.body.classList.add("custom-cursor")

            const onMouseMove = e => {
                pos.x = e.pageX
                pos.y = e.pageY - window.scrollY
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
            const update = () => {
                cursorPos.x += (pos.x - cursorPos.x) * ease
                cursorPos.y += (pos.y - cursorPos.y) * ease
                cursorEl.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) skew(${skew.x}deg, ${skew.y}deg)`

                requestAnimationFrame(update)
            }

            const request = requestAnimationFrame(update)
            window.addEventListener("mousemove", onMouseMove)
            window.addEventListener("mousedown", onMouseDown)
            window.addEventListener("mouseup", onMouseUp)
            window.addEventListener("mouseleave", onMouseLeave)
            window.addEventListener("mouseenter", onMouseEnter)

            return () => {
                cancelAnimationFrame(request)
                window.removeEventListener("mousemove", onMouseMove)
                window.removeEventListener("mousedown", onMouseDown)
                window.removeEventListener("mouseup", onMouseUp)
                window.removeEventListener("mouseleave", onMouseLeave)
                window.removeEventListener("mouseenter", onMouseEnter)
            }
        }
    }, [])

    return (
        <CursorWrapper ref={cursorRef}>
            <CursorItself />
        </CursorWrapper>
    )
}

export default Cursor

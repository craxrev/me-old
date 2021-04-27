import React, { useEffect, useRef } from "react"

import { CursorWrapper, CursorCompanion, CursorItself } from "./styles"

const Cursor = () => {
    const cursorCompanionRef = useRef()
    const cursorItselfRef = useRef()

    useEffect(() => {
        if (cursorCompanionRef.current && cursorItselfRef.current) {
            let timeout
            let timeup = true

            const cursorCompanionEl = cursorCompanionRef.current
            const cursorItselfEl = cursorItselfRef.current

            const ease = 0.2
            const pos = {
                x: 579,
                y: 313,
            }
            const cursorPos = {
                x: 0,
                y: 0,
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
                if (cursorPos.x < 0.01) cursorPos.x = 0
                if (cursorPos.y < 0.01) cursorPos.y = 0

                const diffX = Math.abs(cursorPos.x - pos.x)
                const diffY = Math.abs(cursorPos.y - pos.y)
                if (diffX >= 0.01 || diffY >= 0.01) {
                    cursorCompanionEl.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) skew(${skew.x}deg, ${skew.y}deg)`
                    cursorItselfEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
                }

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
        <CursorWrapper>
            <CursorCompanion ref={cursorCompanionRef} />
            <CursorItself ref={cursorItselfRef} />
        </CursorWrapper>
    )
}

export default Cursor

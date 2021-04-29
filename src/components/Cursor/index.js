import React, { useEffect, useRef } from "react"

import { CursorWrapper, CursorCompanion, CursorItself } from "./styles"

const Cursor = () => {
    const cursorCompanionRef = useRef()
    const cursorItselfRef = useRef()

    useEffect(() => {
        // TODO: export below logic into a separate file, maybe refactor into a javascript class?
        // TODO: extract helper functions
        // TODO: extract configurations & variables
        // TODO: make some configuration optional
        if (cursorCompanionRef.current && cursorItselfRef.current) {
            let timeout, noiser
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
            const noise = {
                x: 0,
                y: 0,
            }
            let cursorScale = 1
            let scale = 1
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
                clearInterval(noiser)
                noise.x = 0
                noise.y = 0
            }
            const onMouseMoveEnd = () => {
                noiser = setInterval(() => {
                    noise.x = (0.5 - Math.random()) * 4
                    noise.y = (0.5 - Math.random()) * 4
                }, 100)
            }
            const onMouseDown = () => {
                console.log("onMouseDown")
            }
            const onMouseUp = () => {
                console.log("onMouseUp")
            }
            const onMouseOut = e => {
                const target = e.target
                if (target && target.tagName.toLowerCase() === "a") {
                    scale = 1
                }
            }
            const onMouseOver = e => {
                const target = e.target
                if (target && target.tagName.toLowerCase() === "a") {
                    scale = 3
                }
            }
            const update = () => {
                if (noise.x === 0 && noise.y === 0) {
                    cursorPos.x += (pos.x - cursorPos.x) * ease
                    cursorPos.y += (pos.y - cursorPos.y) * ease
                } else {
                    cursorPos.x += (pos.x + noise.x - cursorPos.x) * (ease / 10)
                    cursorPos.y += (pos.y + noise.y - cursorPos.y) * (ease / 10)
                }
                if (cursorPos.x < 0.01) cursorPos.x = 0
                if (cursorPos.y < 0.01) cursorPos.y = 0

                cursorScale += (scale - cursorScale) * ease

                const diffX = Math.abs(cursorPos.x - pos.x)
                const diffY = Math.abs(cursorPos.y - pos.y)
                if (diffX >= 0.01 || diffY >= 0.01) {
                    cursorCompanionEl.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) skew(${skew.x}deg, ${skew.y}deg) scale(${cursorScale})`
                    cursorItselfEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
                }

                requestAnimationFrame(update)
            }

            const request = requestAnimationFrame(update)
            window.addEventListener("mousemove", onMouseMove)
            window.addEventListener("mousedown", onMouseDown)
            window.addEventListener("mouseup", onMouseUp)
            window.addEventListener("mouseout", onMouseOut)
            window.addEventListener("mouseover", onMouseOver)

            return () => {
                cancelAnimationFrame(request)
                window.removeEventListener("mousemove", onMouseMove)
                window.removeEventListener("mousedown", onMouseDown)
                window.removeEventListener("mouseup", onMouseUp)
                window.removeEventListener("mouseout", onMouseOut)
                window.removeEventListener("mouseover", onMouseOver)
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

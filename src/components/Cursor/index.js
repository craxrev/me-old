import React, { useEffect, useRef } from "react"

import { CursorItself } from "./styles"

const Cursor = () => {
    const cursorRef = useRef()

    useEffect(() => {
        if (cursorRef.current) {
            let timeout
            let timeup = true
            const cursorEl = cursorRef.current

            let scrollY = 0
            const ease = 0.1
            const pos = {
                x: undefined,
                y: undefined,
            }
            const lastPos = {
                x: undefined,
                y: undefined,
            }
            const follow = {
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

            const onScroll = e => {
                scrollY = window.scrollY
            }
            const onMouseMove = e => {
                pos.x = e.pageX
                pos.y = e.pageY
                requestAnimationFrame(update)
                //update()
                lastPos.x = e.pageX
                lastPos.y = e.pageY
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
                follow.x += (pos.x - follow.x) * ease
                follow.y += (pos.y - follow.y) * ease
                const dx = Math.min(Math.max(pos.x - follow.x, -15), 15)
                const dy = Math.min(Math.max(pos.y - follow.y, -15), 15)
                cursorEl.style.transform = `translate3d(${pos.x}px, ${
                    pos.y - scrollY
                }px, 0) skew(${dx}deg, ${dy}deg)`
                //cursorEl.style.left = `${pos.x}px`
                //cursorEl.style.top = `${pos.y - scrollY}px`
            }

            window.addEventListener("scroll", onScroll)
            window.addEventListener("mousemove", onMouseMove)
            window.addEventListener("mousedown", onMouseDown)
            window.addEventListener("mouseup", onMouseUp)
            window.addEventListener("mouseleave", onMouseLeave)
            window.addEventListener("mouseenter", onMouseEnter)

            return () => {
                window.removeEventListener("scroll", onScroll)
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

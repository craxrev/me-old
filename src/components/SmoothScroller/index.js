import React, { useEffect, useRef } from "react"

import useRect from "../../hooks/useRect"

import { Scroller } from "./styles"

const SmoothScroller = ({ children }) => {
    const scrollingContainerRef = useRef()

    const scrollingContainerSize = useRect(scrollingContainerRef)

    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    }

    useEffect(() => {
        setBodyHeight()
    }, [scrollingContainerSize.height])

    const setBodyHeight = () => {
        document.body.style.height = `${
            scrollingContainerRef.current.getBoundingClientRect().height
        }px`
    }

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler())
    })

    const smoothScrollingHandler = () => {
        data.current = window.scrollY
        data.previous += (data.current - data.previous) * data.ease
        data.rounded = Math.round(data.previous * 100) / 100

        if (scrollingContainerRef.current) {
            scrollingContainerRef.current.style.transform = `translateY(-${data.rounded}px)`
        }

        requestAnimationFrame(() => smoothScrollingHandler())
    }

    return (
        <Scroller>
            <div ref={scrollingContainerRef}>{children}</div>
        </Scroller>
    )
}

export default SmoothScroller

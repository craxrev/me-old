import { useEffect, useCallback, useState } from "react"

const useRect = ref => {
    const [rect, setRect] = useState(getRect(ref ? ref.current : null))

    const handleResize = useCallback(() => {
        if (!ref.current) {
            return
        }

        // Update client rect
        setRect(getRect(ref.current))
    }, [ref])

    useEffect(() => {
        const element = ref.current
        if (!element) {
            return
        }

        handleResize()

        if (typeof ResizeObserver === "function") {
            let resizeObserver = new ResizeObserver(() => handleResize())
            resizeObserver.observe(element)

            return () => {
                if (!resizeObserver) {
                    return
                }

                resizeObserver.disconnect()
                resizeObserver = null
            }
        } else {
            // Browser support, remove freely
            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [ref, handleResize])

    return rect
}

function getRect(element) {
    if (!element) {
        return {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
        }
    }

    return element.getBoundingClientRect()
}

export default useRect

import { useLayoutEffect } from "react"

const useLockBodyScroll = () => {
    useLayoutEffect(() => {
        document.body.classList && document.body.classList.add("no-scroll")
        return () =>
            document.body.classList &&
            document.body.classList.remove("no-scroll")
    }, [])
}

export default useLockBodyScroll

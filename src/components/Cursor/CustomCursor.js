// Custom Cursor class

const CustomCursor = wrapperElement => {
    const config = {
        ease: 0.2,
        noiseEase: 0.02,
        defaultScale: 1,
        linkScale: 3,
        withNoise: true,
    }

    const state = {
        el: {
            cursorCompanion: wrapperElement.children[0],
            cursorItself: wrapperElement.children[1],
        },
        onMouseMove: e => {
            state.pos.x = e.pageX
            state.pos.y = e.pageY - window.scrollY
            if (state.timeup) {
                state.timeup = false
                state.onMouseMoveStart()
            }
            if (state.timeout) {
                clearTimeout(state.timeout)
            }
            state.timeout = setTimeout(() => {
                state.onMouseMoveEnd()
                state.timeup = true
            }, 200)
        },
        onMouseMoveStart: () => {
            clearInterval(state.cursorCompanion.noiser)
            state.cursorCompanion.noise.x = 0
            state.cursorCompanion.noise.y = 0
        },
        onMouseMoveEnd: () => {
            if (config.withNoise) {
                state.cursorCompanion.noiser = setInterval(() => {
                    state.cursorCompanion.noise.x = (0.5 - Math.random()) * 4
                    state.cursorCompanion.noise.y = (0.5 - Math.random()) * 4
                }, 100)
            }
        },
        onMouseDown: () => {
            logger("onMouseDown")
        },
        onMouseUp: () => {
            logger("onMouseUp")
        },
        onMouseOut: e => {
            const target = e.target
            if (target && target.tagName.toLowerCase() === "a") {
                state.cursorCompanion.scale.target = config.defaultScale
            }
        },
        onMouseOver: e => {
            const target = e.target
            if (target && target.tagName.toLowerCase() === "a") {
                state.cursorCompanion.scale.target = config.linkScale
            }
        },
        renderer: undefined,
        timeout: undefined,
        timeup: true,
        pos: {
            x: 579,
            y: 313,
        },
        cursorCompanion: {
            noiser: undefined,
            noise: {
                x: 0,
                y: 0,
            },
            scale: {
                target: config.defaultScale,
                current: config.defaultScale,
            },
            pos: {
                current: {
                    x: 0,
                    y: 0,
                },
            },
        },
    }

    const setup = () => {
        document.body.classList &&
            !document.body.classList.contains("custom-cursor") &&
            document.body.classList.add("custom-cursor")

        window.addEventListener("mousemove", state.onMouseMove)
        window.addEventListener("mousedown", state.onMouseDown)
        window.addEventListener("mouseup", state.onMouseUp)
        window.addEventListener("mouseout", state.onMouseOut)
        window.addEventListener("mouseover", state.onMouseOver)

        logger("setup")
    }
    const update = () => {
        if (
            state.cursorCompanion.noise.x === 0 &&
            state.cursorCompanion.noise.y === 0
        ) {
            state.cursorCompanion.pos.current.x = lerp(
                state.cursorCompanion.pos.current.x,
                state.pos.x,
                config.ease
            )
            state.cursorCompanion.pos.current.y = lerp(
                state.cursorCompanion.pos.current.y,
                state.pos.y,
                config.ease
            )
        } else {
            state.cursorCompanion.pos.current.x = lerp(
                state.cursorCompanion.pos.current.x,
                state.pos.x + state.cursorCompanion.noise.x,
                config.noiseEase
            )
            state.cursorCompanion.pos.current.y = lerp(
                state.cursorCompanion.pos.current.y,
                state.pos.y + state.cursorCompanion.noise.y,
                config.noiseEase
            )
        }
        if (state.cursorCompanion.pos.current.x < 0.01)
            state.cursorCompanion.pos.current.x = 0
        if (state.cursorCompanion.pos.current.y < 0.01)
            state.cursorCompanion.pos.current.y = 0

        state.cursorCompanion.scale.current = lerp(
            state.cursorCompanion.scale.current,
            state.cursorCompanion.scale.target,
            config.ease
        )

        const diffX = Math.abs(
            state.cursorCompanion.pos.current.x - state.pos.x
        )
        const diffY = Math.abs(
            state.cursorCompanion.pos.current.y - state.pos.y
        )
        if (diffX >= 0.01 || diffY >= 0.01) {
            state.el.cursorCompanion.style.transform = `translate3d(${state.cursorCompanion.pos.current.x}px, ${state.cursorCompanion.pos.current.y}px, 0) scale(${state.cursorCompanion.scale.current})`
            state.el.cursorItself.style.transform = `translate3d(${state.pos.x}px, ${state.pos.y}px, 0)`
        }

        requestAnimationFrame(update)
    }
    const render = () => {
        state.renderer = requestAnimationFrame(update)

        logger("render")
    }
    const destroy = () => {
        cancelAnimationFrame(state.renderer)
        window.removeEventListener("mousemove", state.onMouseMove)
        window.removeEventListener("mousedown", state.onMouseDown)
        window.removeEventListener("mouseup", state.onMouseUp)
        window.removeEventListener("mouseout", state.onMouseOut)
        window.removeEventListener("mouseover", state.onMouseOver)

        logger("destroy")
    }

    const logger = message => {
        console.log("[Custom Cursor]", message)
    }

    setup()

    return {
        render: render,
        destroy: destroy,
    }
}

// Helper functions

const lerp = (from, to, amt) => {
    return (to - from) * amt + from
}

export default CustomCursor

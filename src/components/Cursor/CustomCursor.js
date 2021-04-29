// Custom Cursor class

const CustomCursor = wrapperElement => {
    const config = {
        ease: 0.2,
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
            clearInterval(state.noiser)
            state.noise.x = 0
            state.noise.y = 0
        },
        onMouseMoveEnd: () => {
            state.noiser = setInterval(() => {
                state.noise.x = (0.5 - Math.random()) * 4
                state.noise.y = (0.5 - Math.random()) * 4
            }, 100)
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
                state.scale = 1
            }
        },
        onMouseOver: e => {
            const target = e.target
            if (target && target.tagName.toLowerCase() === "a") {
                state.scale = 3
            }
        },
        renderer: undefined,
        noiser: undefined,
        timeout: undefined,
        timeup: true,
        pos: {
            x: 579,
            y: 313,
        },
        cursorPos: {
            x: 0,
            y: 0,
        },
        noise: {
            x: 0,
            y: 0,
        },
        scale: 1,
        cursorScale: 1,
        skew: {
            x: 0,
            y: 0,
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
        if (state.noise.x === 0 && state.noise.y === 0) {
            state.cursorPos.x += (state.pos.x - state.cursorPos.x) * config.ease
            state.cursorPos.y += (state.pos.y - state.cursorPos.y) * config.ease
        } else {
            state.cursorPos.x +=
                (state.pos.x + state.noise.x - state.cursorPos.x) *
                (config.ease / 10)
            state.cursorPos.y +=
                (state.pos.y + state.noise.y - state.cursorPos.y) *
                (config.ease / 10)
        }
        if (state.cursorPos.x < 0.01) state.cursorPos.x = 0
        if (state.cursorPos.y < 0.01) state.cursorPos.y = 0

        state.cursorScale += (state.scale - state.cursorScale) * config.ease

        const diffX = Math.abs(state.cursorPos.x - state.pos.x)
        const diffY = Math.abs(state.cursorPos.y - state.pos.y)
        if (diffX >= 0.01 || diffY >= 0.01) {
            state.el.cursorCompanion.style.transform = `translate3d(${state.cursorPos.x}px, ${state.cursorPos.y}px, 0) skew(${state.skew.x}deg, ${state.skew.y}deg) scale(${state.cursorScale})`
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

export default CustomCursor
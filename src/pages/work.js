import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Projects from "../components/Projects"

export default function Work() {
    const { name } = useSiteMetadata()
    return (
        <main>
            <Helmet>
                <title>✨ Projects &bull; {name}</title>
            </Helmet>
            <Projects />
        </main>
    )
}

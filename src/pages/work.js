import React from "react"
import { Helmet } from "react-helmet"

import Projects from "../components/Projects"

export default function Work() {
    return (
        <main>
            <Helmet>
                <title>✨ Projects</title>
            </Helmet>
            <Projects />
        </main>
    )
}

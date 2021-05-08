import React from "react"
import { Helmet } from "react-helmet"

import Bio from "../components/Bio"

export default function About() {
    return (
        <main>
            <Helmet>
                <title>🧐 About</title>
            </Helmet>
            <Bio />
        </main>
    )
}

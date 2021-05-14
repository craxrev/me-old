import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Bio from "../components/Bio"

export default function About() {
    const { name } = useSiteMetadata()
    return (
        <main>
            <Helmet>
                <title>🧐 About &bull; {name}</title>
            </Helmet>
            <Bio />
        </main>
    )
}

import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Posts from "../components/Posts"

export default function Blog() {
    const { name } = useSiteMetadata()
    return (
        <main>
            <Helmet>
                <title>🔥 Blog &bull; {name}</title>
            </Helmet>
            <Posts />
        </main>
    )
}

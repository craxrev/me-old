import React from "react"
import { Helmet } from "react-helmet"

import Posts from "../components/Posts"

export default function Blog() {
    return (
        <main>
            <Helmet>
                <title>🔥 Blog</title>
            </Helmet>
            <Posts />
        </main>
    )
}

import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import HomeHero from "../components/HomeHero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home() {
    const { name } = useSiteMetadata()
    return (
        <main>
            <Helmet>
                <title>👋 Hey &bull; {name}</title>
            </Helmet>
            <HomeHero />
            <Projects home />
            <Posts home />
        </main>
    )
}

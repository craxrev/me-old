import React from "react"

import HomeHero from "../components/HomeHero/index"
import Projects from "../components/Projects"
import HomeArticles from "../components/HomeArticles"

export default function Home() {
    return (
        <main>
            <HomeHero />
            <Projects home />
            <HomeArticles />
        </main>
    )
}

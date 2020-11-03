import React from "react"

import HomeHero from "../components/HomeHero/index"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home() {
    return (
        <main>
            <HomeHero />
            <Projects home />
            <Posts home />
        </main>
    )
}

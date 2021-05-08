import React from "react"
import { Helmet } from "react-helmet"

import HomeHero from "../components/HomeHero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home() {
    return (
        <main>
            <Helmet>
                <title>👋 Hey</title>
            </Helmet>
            <HomeHero />
            <Projects home />
            <Posts home />
        </main>
    )
}

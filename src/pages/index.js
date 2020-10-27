import React from "react"

import HomeHero from "../components/HomeHero/index"
import HomeProjects from "../components/HomeProjects"
import HomeArticles from "../components/HomeArticles"

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeProjects />
            <HomeArticles />
        </div>
    )
}

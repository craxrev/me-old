import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import HomeHero from "../components/HomeHero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home({
    data: {
        site: {
            siteMetadata: { name },
        },
    },
}) {
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

export const query = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                name
            }
        }
    }
`

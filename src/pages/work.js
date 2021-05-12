import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Projects from "../components/Projects"

export default function Work({
    data: {
        site: {
            siteMetadata: { name },
        },
    },
}) {
    return (
        <main>
            <Helmet>
                <title>✨ Projects &bull; {name}</title>
            </Helmet>
            <Projects />
        </main>
    )
}

export const query = graphql`
    query WorkQuery {
        site {
            siteMetadata {
                name
            }
        }
    }
`

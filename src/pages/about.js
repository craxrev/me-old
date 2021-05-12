import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import Bio from "../components/Bio"

export default function About({
    data: {
        site: {
            siteMetadata: { name },
        },
    },
}) {
    console.log(name)
    return (
        <main>
            <Helmet>
                <title>🧐 About &bull; {name}</title>
            </Helmet>
            <Bio />
        </main>
    )
}

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                name
            }
        }
    }
`

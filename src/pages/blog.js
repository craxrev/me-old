import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Posts from "../components/Posts"

export default function Blog({
    data: {
        site: {
            siteMetadata: { name },
        },
    },
}) {
    return (
        <main>
            <Helmet>
                <title>🔥 Blog &bull; {name}</title>
            </Helmet>
            <Posts />
        </main>
    )
}

export const query = graphql`
    query BlogQuery {
        site {
            siteMetadata {
                name
            }
        }
    }
`

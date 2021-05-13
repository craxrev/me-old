import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Posts from "../components/Posts"

export default function Blog({
    data: {
        allMarkdownRemark: { nodes },
    },
}) {
    const { name } = useSiteMetadata()
    const posts = nodes.map(node => ({ id: node.id, ...node.frontmatter }))
    return (
        <main>
            <Helmet>
                <title>🔥 Blog &bull; {name}</title>
            </Helmet>
            <Posts posts={posts} />
        </main>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/articles/" }
                frontmatter: { draft: { eq: false } }
            }
        ) {
            nodes {
                frontmatter {
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    category
                    title
                }
                id
            }
        }
    }
`

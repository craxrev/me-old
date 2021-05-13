import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Posts from "../components/Posts"
import { graphql } from "gatsby"

export default function Category({
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

export const pageQuery = graphql`
    query BlogsByCategory($category: String!) {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/articles/" }
                frontmatter: {
                    draft: { eq: false }
                    category: { eq: $category }
                }
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

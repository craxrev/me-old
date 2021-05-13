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
    const posts = nodes.map(node => ({
        id: node.id,
        slug: node.fields.slug,
        ...node.frontmatter,
    }))
    return (
        <main>
            <Helmet>
                <title>🔥 Blog &bull; {name}</title>
            </Helmet>
            <Posts posts={posts} />
        </main>
    )
}

export const page = graphql`
    query($category: String!) {
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
                fields {
                    slug
                }
                frontmatter {
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 890
                                height: 532
                                placeholder: BLURRED
                            )
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

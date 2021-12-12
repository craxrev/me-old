import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import useSiteMetadata from "../hooks/useSiteMetadata"
import HomeHero from "../components/HomeHero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home({
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
                <title>👋 Hey &bull; {name}</title>
            </Helmet>
            <HomeHero />
            <Posts home posts={posts} />
        </main>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: {
                fileAbsolutePath: { regex: "/content/articles/" }
                frontmatter: { draft: { eq: false } }
            }
            limit: 4
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

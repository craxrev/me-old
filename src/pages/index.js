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
    const posts = nodes.map(node => ({ id: node.id, ...node.frontmatter }))
    return (
        <main>
            <Helmet>
                <title>👋 Hey &bull; {name}</title>
            </Helmet>
            <HomeHero />
            <Projects home />
            <Posts home posts={posts} />
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
            limit: 4
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

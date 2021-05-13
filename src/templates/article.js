import { graphql } from "gatsby"
import React from "react"

import Post from "../components/Post"
import Posts from "../components/Posts"

export default function Article({
    data: { markdownRemark },
    pageContext: { posts },
}) {
    const post = {
        html: markdownRemark.html,
        readingTime: markdownRemark.fields.readingTime.text,
        ...markdownRemark.frontmatter,
    }
    return (
        <div>
            <Post data={post} />
            <Posts posts={posts} related />
        </div>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                category
                title
                date(formatString: "MMMM DD, YYYY")
                tags
                image {
                    childImageSharp {
                        gatsbyImageData(width: 1256, placeholder: BLURRED)
                    }
                }
            }
            fields {
                readingTime {
                    text
                }
            }
            html
        }
    }
`

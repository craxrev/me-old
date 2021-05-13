const path = require("path")
const kebabCase = require("lodash/kebabCase")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const CategoryTemplate = path.resolve("src/templates/category.js")
    const ArticleTemplate = path.resolve("src/templates/article.js")

    const result = await graphql(`
        query {
            blogCategories: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/content/articles/" }
                    frontmatter: { draft: { eq: false } }
                }
            ) {
                group(field: frontmatter___category) {
                    fieldValue
                }
            }
            posts: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/content/articles/" }
                    frontmatter: { draft: { eq: false } }
                }
            ) {
                nodes {
                    fileAbsolutePath
                    fields {
                        slug
                    }
                    frontmatter {
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        category
                        title
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create Categories pages

    const categories = result.data.blogCategories.group

    categories.forEach(category => {
        createPage({
            path: `/blog/${kebabCase(category.fieldValue)}`,
            component: CategoryTemplate,
            context: {
                category: category.fieldValue,
            },
        })
    })

    // Create posts pages

    const postsNodes = result.data.posts.nodes

    postsNodes.forEach(node => {
        createPage({
            path: `/blog/${node.fields.slug}`,
            component: ArticleTemplate,
            context: {
                slug: node.fields.slug,
                posts: postsNodes
                    .filter(
                        nodeEl =>
                            nodeEl.frontmatter.category ===
                                node.frontmatter.category &&
                            nodeEl.fields.slug !== node.fields.slug
                    )
                    .slice(0, 2),
            },
        })
    })
}

// add slug field to MarkdownRemark nodes

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    const fileNode = getNode(node.parent)

    if (node.internal.type === "MarkdownRemark") {
        const parsedFilePath = path.parse(fileNode.relativePath)
        const slug = parsedFilePath.dir.split("/").reverse()[0]
        createNodeField({
            name: `slug`,
            node,
            value: slug,
        })
    }
}

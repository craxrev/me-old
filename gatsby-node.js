const path = require("path")
const kebabCase = require("lodash/kebabCase")

// Create Categories pages

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const CategoryTemplate = path.resolve("src/templates/category.js")

    const result = await graphql(`
        query {
            allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___category) {
                    fieldValue
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const categories = result.data.allMarkdownRemark.group

    categories.forEach(category => {
        createPage({
            path: `/blog/${kebabCase(category.fieldValue)}`,
            component: CategoryTemplate,
            context: {
                category: category.fieldValue,
            },
        })
    })
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// TODO: make /src path resolvable and add dotenv file reading logic
// TODO: add @component/* alias

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Creative Developer",
        subtitle: "Striving for everything digital",
        name: "Mortadha Ghanmi",
        description:
            "Hello, am a full-stack software engineer from Tunisia, explore my recent projects below, find out who i am, and check out my articles where i share with you what’s in my mind.",
        email: "mortadha.ghamni56@gmail.com",
        github: "https://github.com/craxrev",
        twitter: "https://twitter.com/craxrev",
        linkedin: "http://linkedin.com/in/ghanmi-mortadha",
    },
    plugins: [
        "gatsby-plugin-layout",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-dark-mode",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: "tomato",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
    ],
}

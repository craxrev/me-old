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
        title: "<👋Hello></There👊>",
        subtitle: "DMM, I'm Just hanging 😎ut on the web",
        name: "Mortadha Ghanmi",
        description:
            "So, I'm Mortadha Ghanmi, I am a SoftWaRe eNgineEr from TUNISIA, I do write good code from time 2 time, otherwise you'll find me fighting typos for days.. I'll be posting some of my fine sauces on my blog, so stay tuned.. also, I pwn for \"fUn\"",
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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content`,
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 784,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
    ],
}

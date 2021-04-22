/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// TODO: make /src path resolvable and add dotenv file reading logic
// TODO: add @component/* alias

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet'
  ],
}

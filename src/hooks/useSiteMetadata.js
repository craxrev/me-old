import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    subtitle
                    name
                    description
                    email
                    github
                    twitter
                    linkedin
                }
            }
        }
    `)

    return site.siteMetadata
}

export default useSiteMetadata

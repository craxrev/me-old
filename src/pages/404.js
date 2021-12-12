import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import FourOwFour from "../components/FourOwFour"

export default function P404() {
    const { name } = useSiteMetadata()
    return (
        <main>
            <Helmet>
                <title>404 &bull; {name}</title>
            </Helmet>
            <FourOwFour />
        </main>
    )
}

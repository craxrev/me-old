import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"

export default function Layout({ children }) {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/css/fonts.css"
                />
                <meta name="color-scheme" content="dark" />
            </Helmet>
            <Wrapper>
                <GlobalStyle />
                <Header />
                {children}
            </Wrapper>
            <Footer />
        </>
    )
}

import React from "react"
import { Helmet } from "react-helmet"

import SmoothScroller from "../components/SmoothScroller"
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"

export default function Layout({ children }) {
    return (
        <SmoothScroller>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/css/fonts.css"
                />
            </Helmet>
            <Wrapper>
                <GlobalStyle />
                <Header />
                {children}
            </Wrapper>
            <Footer />
        </SmoothScroller>
    )
}

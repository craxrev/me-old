import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import SmoothScroller from "../components/SmoothScroller"
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"
import useDeviceDetect from "../hooks/useDeviceDetect"

export default function Layout({ children }) {
    const ScrollWrapper = useDeviceDetect.isMobile ? Fragment : SmoothScroller
    return (
        <ScrollWrapper>
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
        </ScrollWrapper>
    )
}

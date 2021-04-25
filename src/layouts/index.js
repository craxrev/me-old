import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import SmoothScroller from "../components/SmoothScroller"
import Cursor from "../components/Cursor"
import Header from "../components/Header"
import Footer from "../components/Footer"

import useDeviceDetect from "../hooks/useDeviceDetect"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"

export default function Layout({ children }) {
    const ScrollWrapper = !useDeviceDetect.isMobile ? Fragment : SmoothScroller
    const CursorElem = useDeviceDetect.isMobile ? Fragment : Cursor
    return (
        <ScrollWrapper>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/css/fonts.css"
                />
            </Helmet>
            <CursorElem />
            <Wrapper>
                <GlobalStyle />
                <Header />
                {children}
            </Wrapper>
            <Footer />
        </ScrollWrapper>
    )
}

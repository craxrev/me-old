import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import Cursor from "../components/Cursor"
import Header from "../components/Header"
import Footer from "../components/Footer"

import useDeviceDetect from "../hooks/useDeviceDetect"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"

export default function Layout({ children }) {
    const CursorElem = useDeviceDetect.isMobile ? Fragment : Cursor
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
            <CursorElem />
            <Wrapper>
                <GlobalStyle />
                <Header />
                {children}
            </Wrapper>
            <Footer />
        </>
    )
}

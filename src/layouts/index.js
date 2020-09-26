import React from "react"

import Header from "../components/header/index"
import Footer from "../components/footer/index"

import { FontFacesStyle } from "../styles/FontFaces"
import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"


export default function Layout({ children }) {
    return (
        <Wrapper>
            <FontFacesStyle />
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}

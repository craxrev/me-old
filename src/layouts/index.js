import React from "react"

import Header from "../components/header/index"
import Footer from "../components/footer/index"

import { GlobalStyle } from "../styles/Global"

import { Wrapper } from "./styles"


export default function Layout({ children }) {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}

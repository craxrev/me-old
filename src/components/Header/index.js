import { useState, useEffect, default as React } from "react"

import ThemeSwitch from "../ThemeSwitch"

import * as S from "./styles"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 980)
    const breakpoint = 980

    useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener( "resize", handleWindowResize )

        return () => window.removeEventListener( "resize", handleWindowResize )
    }, [] )

    return (
        width >= breakpoint ? 
        <S.Header>
            <S.Nav>
                <S.A to="/">Home</S.A>
                <S.A to="/work">Work</S.A>
                <S.A to="/blog">Blog</S.A>
                <S.A to="/about">About</S.A>
            </S.Nav>
            <ThemeSwitch />
            <S.Email href="mailto:mortadha.ghanmi@beecoop.co">mortadha.ghanmi@beecoop.co</S.Email>
        </S.Header>
        :
        <S.HeaderR>
            <S.MenuToggler
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? 'Close' : 'Menu'}
            </S.MenuToggler>
            <ThemeSwitch />
            <S.HeaderRContent
                open={menuOpen}
            >
                <S.NavR>
                    <S.AR to="/"      onClick={() => setMenuOpen(!menuOpen)}>Home</S.AR>
                    <S.AR to="/work"  onClick={() => setMenuOpen(!menuOpen)}>Work</S.AR>
                    <S.AR to="/blog"  onClick={() => setMenuOpen(!menuOpen)}>Blog</S.AR>
                    <S.AR to="/about" onClick={() => setMenuOpen(!menuOpen)}>About</S.AR>
                </S.NavR>
                <S.EmailR href="mailto:mortadha.ghanmi@beecoop.co">mortadha.ghanmi@beecoop.co</S.EmailR>
                <S.Socials>
                    <S.Social to="#">Github</S.Social>
                    <S.Social to="#">Linkedin</S.Social>
                    <S.Social to="#">Twitter</S.Social>
                </S.Socials>
            </S.HeaderRContent>
        </S.HeaderR>
    )
}

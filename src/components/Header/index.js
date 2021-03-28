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

    const A = (props => <S.A {...props} activeClassName="active" />)
    const AR = (props => <S.AR {...props} activeClassName="active" />)

    return (
        width >= breakpoint ? 
        <S.Header>
            <S.Nav>
                <A to="/">Home</A>
                <A to="/work">Work</A>
                <A to="/blog">Blog</A>
                <A to="/about">About</A>
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
                    <AR to="/"      onClick={() => setMenuOpen(!menuOpen)}>Home</AR>
                    <AR to="/work"  onClick={() => setMenuOpen(!menuOpen)}>Work</AR>
                    <AR to="/blog"  onClick={() => setMenuOpen(!menuOpen)}>Blog</AR>
                    <AR to="/about" onClick={() => setMenuOpen(!menuOpen)}>About</AR>
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

import React from "react"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

import * as S from "./styles"

export default function Header() {
    return (
        <S.Header>
            {/* <S.Nav>
                <S.A to="/">Home</S.A>
                <S.A to="/work">Work</S.A>
                <S.A to="/blog">Blog</S.A>
                <S.A to="/about">About</S.A>
            </S.Nav> */}
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <button
                        onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? 'dark' : 'light'} mode
                    </button>
                )}
            </ThemeToggler>
            {/* <S.Email href="mailto:mortadha.ghanmi@beecoop.co">mortadha.ghanmi@beecoop.co</S.Email> */}
        </S.Header>
    )
}

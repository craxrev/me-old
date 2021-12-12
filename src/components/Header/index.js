import { graphql, StaticQuery } from "gatsby"
import { useState, useEffect, default as React } from "react"

import ThemeSwitch from "../ThemeSwitch"

import * as S from "./styles"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 980
    )
    const breakpoint = 980

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)

        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    const A = props => <S.A {...props} activeClassName="active" />
    const AR = props => <S.AR {...props} activeClassName="active" />

    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            email
                            github
                            twitter
                            linkedin
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { email, github, twitter, linkedin },
                },
            }) =>
                width >= breakpoint ? (
                    <S.Header>
                        <S.Nav>
                            <A to="/">Home</A>
                            <A to="/work">Work</A>
                            <A to="/blog">Blog</A>
                            <A to="/about">About</A>
                        </S.Nav>
                        <ThemeSwitch />
                        <S.Email href={`mailto:${email}`}>{email}</S.Email>
                    </S.Header>
                ) : (
                    <S.HeaderR>
                        <S.MenuToggler onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? "Close" : "Menu"}
                        </S.MenuToggler>
                        <ThemeSwitch />
                        <S.HeaderRContent open={menuOpen}>
                            <S.NavR>
                                <AR
                                    to="/"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    Home
                                </AR>
                                <AR
                                    to="/work"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    Work
                                </AR>
                                <AR
                                    to="/blog"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    Blog
                                </AR>
                                <AR
                                    to="/about"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    About
                                </AR>
                            </S.NavR>
                            <S.EmailR href={`mailto:${email}`}>
                                {email}
                            </S.EmailR>
                            <S.Socials>
                                <S.Social href={github} target="_blank">
                                    Github
                                </S.Social>
                                <S.Social href={twitter} target="_blank">
                                    Twitter
                                </S.Social>
                                <S.Social href={linkedin} target="_blank">
                                    Linkedin
                                </S.Social>
                            </S.Socials>
                        </S.HeaderRContent>
                    </S.HeaderR>
                )
            }
        />
    )
}

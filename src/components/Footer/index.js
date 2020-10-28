import React from "react"

import * as S from "./styles"

export default function Footer() {
    return (
        <S.Footer>
            <S.Content>
                <S.Main>
                    <S.Header>Get in touch</S.Header>
                    <S.Email href="mailto:mortadha.ghanmi@beecoop.co">mortadha.ghanmi@beecoop.co</S.Email>
                </S.Main>
                <S.Links>
                    <S.Pages>
                        <S.PageLink to="/">Home</S.PageLink>
                        <S.PageLink to="/work">Work</S.PageLink>
                        <S.PageLink to="/about">About</S.PageLink>
                        <S.PageLink to="/blog">Articles</S.PageLink>
                    </S.Pages>
                    <S.Socials>
                        <S.A href="#">Github</S.A>
                        <S.A href="#">Twitter</S.A>
                        <S.A href="#">Linkedin</S.A>
                    </S.Socials>
                    <S.Other>
                        <S.PageLink to="/tags">Tags</S.PageLink>
                        <S.PageLink to="/feed">Feed</S.PageLink>
                    </S.Other>
                </S.Links>
                <S.Svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <S.Path d="M7 15.5055L7 1.99995M7 1.99995L1 6.78316M7 1.99995L13 6.78316"/>
                </S.Svg>
            </S.Content>
            <S.Copyrights>
                <S.LeftText>© 2020 Mortadha Ghanmi</S.LeftText>
                <S.RightText>Design by <S.inlineA href="#">Malek Chourabi</S.inlineA></S.RightText>
            </S.Copyrights>
            <S.Info>This site is built with <S.inlineA href="#">Gatsby</S.inlineA> and hosted on <S.inlineA href="#">Netlify</S.inlineA>. The source code is hosted on <S.inlineA href="#">Github</S.inlineA>.</S.Info>
        </S.Footer>
    )
}

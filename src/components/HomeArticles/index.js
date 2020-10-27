import React from "react"

import * as S from "./styles"

export default function HomePosts() {
    return (
        <S.Section>
            <S.Header>Selected Articles</S.Header>
            <S.Main>{Array.from(Array(4), (e, i) => {
                return (
                    <S.Article>
                        <S.Thumb alt="placeholder" src="https://via.placeholder.com/721x531" />
                        <S.Category>Front end</S.Category>
                        <S.Title>Why a design system is the key to scaling accessibility</S.Title>
                    </S.Article>
                )
            })}</S.Main>
            <S.Footer to="/blog">
                All articles
                <S.Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5"/>
                </S.Svg>
            </S.Footer>
        </S.Section>
    )
}

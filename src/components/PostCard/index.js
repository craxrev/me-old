import React from "react"

import * as S from "./styles"

export default function PostCard(props) {
    return (
        <S.Article key={props.idx}>
            <S.Thumbnail alt="placeholder" src="https://via.placeholder.com/721x531" />
            <S.Category>Front end</S.Category>
            <S.Title>Why a design system is the key to scaling accessibility</S.Title>
        </S.Article>
    )
}

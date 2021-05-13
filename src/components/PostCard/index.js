import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as S from "./styles"

export default function PostCard({ data: { image, category, title } }) {
    return (
        <S.Article>
            <S.Thumbnail>
                {image ? (
                    <GatsbyImage image={getImage(image)} alt={title} />
                ) : (
                    <img
                        alt="placeholder"
                        src={"https://via.placeholder.com/721x531"}
                    />
                )}
            </S.Thumbnail>
            <S.Category>{category}</S.Category>
            <S.Title>{title}</S.Title>
        </S.Article>
    )
}

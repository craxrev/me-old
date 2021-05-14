import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as S from "./styles"

export default function PostCard({
    data: { id, slug, image, category, title },
}) {
    return (
        <S.Article key={id} to={`/blog/${slug}`}>
            <S.Thumbnail>
                {image ? (
                    <GatsbyImage image={getImage(image)} alt={title} />
                ) : (
                    <img
                        alt={title}
                        src={"https://via.placeholder.com/721x531"}
                    />
                )}
            </S.Thumbnail>
            <S.Category>{category}</S.Category>
            <S.Title>{title}</S.Title>
        </S.Article>
    )
}

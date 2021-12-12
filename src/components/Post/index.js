import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as S from "./styles"

export default function Post({
    data: { category, title, date, readingTime, tags, image, html },
}) {
    const TagLink = props => (
        <li>
            <S.Tag {...props} />
        </li>
    )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <S.Header>
                <S.Category>{category}</S.Category>
                <S.Title>{title}</S.Title>
                <S.Info>
                    {date} &#9679; {readingTime}
                </S.Info>
                <S.Tags>
                    {tags &&
                        tags.map(tag => <TagLink key={tag}>#{tag}</TagLink>)}
                </S.Tags>
                <S.Cover>
                    {image ? (
                        <GatsbyImage image={getImage(image)} alt={title} />
                    ) : (
                        <img
                            alt={title}
                            src="https://via.placeholder.com/1147x838"
                        />
                    )}
                </S.Cover>
            </S.Header>
            <S.Article dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

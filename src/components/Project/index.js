import React from "react"

import useLockBodyScroll from "../../hooks/useLockBodyScroll"

import * as S from "./styles"

export default function Project({ toggleCollapsed, idx, data }) {
    useLockBodyScroll()
    return (
        <S.Project>
            <S.Container>
                <S.Header>
                    <S.Back onClick={() => toggleCollapsed()}>
                        <S.BackSvg
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <S.Path d="M18 7L2 7M2 7L7.66667 13M2 7L7.66667 1" />
                        </S.BackSvg>
                        Back
                    </S.Back>
                </S.Header>
                <S.Main>
                    <S.Text>
                        <S.Title>{data.name}</S.Title>
                        <S.Description>{data.description}</S.Description>
                        <S.Website href={data.website} target="_blank">
                            Visit website
                            <S.WebsiteSvg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <S.Path d="M5.24264 17.5561L16.5563 6.24241M16.5563 6.24241L8.30677 6.00671M16.5563 6.24241L16.7921 14.492" />
                            </S.WebsiteSvg>
                        </S.Website>
                    </S.Text>
                    <S.Thumbnail
                        src={
                            "https://via.placeholder.com/600x600?text=img-" +
                            (idx + 1)
                        }
                        alt={"image-" + (idx + 1)}
                    />
                </S.Main>
            </S.Container>
        </S.Project>
    )
}

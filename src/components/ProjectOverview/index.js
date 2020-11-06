import React from "react"

import * as S from "./styles"


export default function ProjectOverview(props) {
    return (
        <S.ProjectOverview>
            <S.Header>
                <S.Back
                    onClick={() => props.toggleCollapsed()}
                >
                    <S.Svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <S.Path d="M18 7L2 7M2 7L7.66667 13M2 7L7.66667 1"/>
                    </S.Svg>
                    Back
                </S.Back>
            </S.Header>
            <S.Main>
                <S.Text>
                    <S.Title>
                        Coinsence
                    </S.Title>
                    <S.Description>
                        Coinsence is a decentral collaboration platform and change-maker network powered by blockchain based impact currencies.
                    </S.Description>
                    <S.Website href="https://dev.craxrev.me" target="_blank">
                        Visit website
                        <S.Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <S.Path d="M5.24264 17.5561L16.5563 6.24241M16.5563 6.24241L8.30677 6.00671M16.5563 6.24241L16.7921 14.492"/>
                        </S.Svg>

                    </S.Website>
                </S.Text>
                <S.Thumbnail src={'https://via.placeholder.com/600x600?text=img-' + (props.idx+1)} alt={'image-' + (props.idx+1)} />
            </S.Main>
        </S.ProjectOverview>
    )
}

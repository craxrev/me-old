import React from "react"

import * as S from "./styles"

export default function Projects(props) {
    return (
        <S.Section>
            {props.home &&
            <S.Header>Selected Projects</S.Header>
            }
            <S.Main>{Array.from(Array(4), (e, i) => {
                return (
                    <S.Project>
                        <S.Number>{(i+1).toString().padStart(2, "0")}</S.Number>
                        <S.Title>Beecoop</S.Title>
                        <S.Category>Front end</S.Category>
                    </S.Project>
                )
            })}</S.Main>
            {props.home &&
            <S.Footer to="/work">
                All projects
                <S.Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5"/>
                </S.Svg>
            </S.Footer>
            }
        </S.Section>
    )
}

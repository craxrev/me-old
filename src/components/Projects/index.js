import React, { useState } from "react"

import * as S from "./styles"


export default function Projects(props) {
    const [active, setActive] = useState(0)
    const toggleActive = (idx) => setActive(idx)
    return (
        <S.Section>
            {props.home &&
            <S.Header>Selected Projects</S.Header>
            }
            <S.Main>{Array.from(Array(4), (e, idx) => {
                return (
                    <S.Project
                        active={active === idx}
                        onMouseEnter={() => toggleActive(idx)}
                        key={idx}
                    >
                        <S.Number>{(idx+1).toString().padStart(2, "0")}</S.Number>
                        <S.Title>Beecoop</S.Title>
                        <S.Category>Front end</S.Category>
                        <S.Thumbnail src="https://via.placeholder.com/600x600" alt={'image-' + (idx+1)} />
                    </S.Project>
                )
            }
            )}</S.Main>
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

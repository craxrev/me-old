import React, { useState } from "react"

import Project from "../Project"

import * as S from "./styles"


export default function Projects(props) {
    const [activeIdx, setActive] = useState(-1)
    const toggleActive = (idx) => setActive(idx)
    return (
        <S.Section>
            {props.home ?
                (<S.Header>Selected Projects</S.Header>):
                (<S.PageHeader>Work</S.PageHeader>)
            }
            <S.Main>{Array.from(Array(4), (e, idx) => {
                return (
                    <Project
                        activeIdx={activeIdx}
                        toggleActive={toggleActive}
                        idx={idx}
                        key={idx}
                    />
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

import React, { useState } from "react"

import ProjectCard from "../ProjectCard"

import Data from "../../../content/projects/index.yaml"

import * as S from "./styles"

export default function Projects({ home }) {
    const [activeIdx, setActive] = useState(-1)
    const toggleActive = idx => setActive(idx)

    const projects = home ? Data.slice(0, 2) : Data

    return (
        <S.Section>
            {home ? (
                <S.Header>Selected Projects</S.Header>
            ) : (
                <S.PageHeader>Work</S.PageHeader>
            )}
            <S.Main>
                {projects.map((project, idx) => (
                    <ProjectCard
                        data={project}
                        activeIdx={activeIdx}
                        toggleActive={toggleActive}
                        idx={idx}
                        key={idx}
                    />
                ))}
            </S.Main>
            {home && (
                <S.Footer to="/work">
                    All projects
                    <S.Svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5" />
                    </S.Svg>
                </S.Footer>
            )}
        </S.Section>
    )
}

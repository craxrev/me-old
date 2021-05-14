import React, { useState } from "react"

import Project from "../Project"

import * as S from "./styles"

export default function ProjectCard({ activeIdx, idx, toggleActive, data }) {
    const [collapsed, setCollapsed] = useState(true)
    const toggleCollapsed = () => setCollapsed(!collapsed)

    return (
        <>
            <S.ProjectCard
                active={activeIdx === idx}
                onMouseEnter={() => toggleActive(idx)}
                onClick={() => toggleCollapsed()}
            >
                <S.Number>{(idx + 1).toString().padStart(2, "0")}</S.Number>
                <S.Title>{data.name}</S.Title>
                <S.Category>{data.category}</S.Category>
                <S.Thumbnail
                    src={
                        "https://via.placeholder.com/600x600?text=img-" +
                        (idx + 1)
                    }
                    alt={"image-" + (idx + 1)}
                />
            </S.ProjectCard>
            {!collapsed && (
                <Project
                    data={data}
                    idx={idx}
                    toggleCollapsed={toggleCollapsed}
                />
            )}
        </>
    )
}

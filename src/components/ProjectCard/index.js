import React, { useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

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
                <S.Thumbnail>
                    {data.image ? (
                        <img
                            src={`/assets/projects/${data.image}`}
                            alt={data.name}
                        />
                    ) : (
                        <img
                            alt={data.name}
                            src="https://via.placeholder.com/765x570"
                        />
                    )}
                </S.Thumbnail>
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

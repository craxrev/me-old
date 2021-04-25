import React, { useState } from "react"

import Project from "../Project"

import * as S from "./styles"


export default function ProjectCard(props) {
    const [collapsed, setCollapsed] = useState(true)
    const toggleCollapsed = () => setCollapsed(!collapsed)
    
    return (
        <>
            <S.ProjectCard
                active={props.activeIdx === props.idx}
                onMouseEnter={() => props.toggleActive(props.idx)}
                onClick={() => toggleCollapsed()}
            >
                <S.Number>{(props.idx+1).toString().padStart(2, "0")}</S.Number>
                <S.Title>Beecoop</S.Title>
                <S.Category>Front end</S.Category>
                <S.Thumbnail src={'https://via.placeholder.com/600x600?text=img-' + (props.idx+1)} alt={'image-' + (props.idx+1)} />
            </S.ProjectCard>
            {!collapsed && <Project idx={props.idx} toggleCollapsed={toggleCollapsed} />}
        </>
        
    )
}

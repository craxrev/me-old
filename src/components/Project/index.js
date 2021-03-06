import React, { useState, useEffect } from "react"

import ProjectOverview from "../ProjectOverview"

import * as S from "./styles"


export default function Project(props) {
    const [collapsed, setCollapsed] = useState(true)
    const toggleCollapsed = () => setCollapsed(!collapsed)
    const html = document.querySelector('html')
    useEffect( () => {
        collapsed ? (html.style.overflow = 'visible') : (html.style.overflow = 'hidden')
    }, [collapsed, html.style] )
    return (
        <>
            <S.Project
                active={props.activeIdx === props.idx}
                onMouseEnter={() => props.toggleActive(props.idx)}
                onClick={() => toggleCollapsed()}
            >
                <S.Number>{(props.idx+1).toString().padStart(2, "0")}</S.Number>
                <S.Title>Beecoop</S.Title>
                <S.Category>Front end</S.Category>
                <S.Thumbnail src={'https://via.placeholder.com/600x600?text=img-' + (props.idx+1)} alt={'image-' + (props.idx+1)} />
            </S.Project>
            {!collapsed && <ProjectOverview idx={props.idx} toggleCollapsed={toggleCollapsed} />}
        </>
        
    )
}

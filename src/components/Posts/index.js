import React from "react"

import PostCard from "../PostCard"

import * as S from "./styles"


export default function Posts(props) {

    const FilterLink = (props => <S.FilterLink {...props} activeClassName="active" />)

    return (
        <S.Section home={props.home}>
            {props.home ?
                (<S.Header>Selected Articles</S.Header>):
                (
                <>
                    <S.PageHeader>Articles</S.PageHeader>
                    <S.Filter>
                        <FilterLink to="/blog">All</FilterLink>
                        <FilterLink to="/blog/front-end">Front-end</FilterLink>
                        <FilterLink to="/blog/back-end">Back-end</FilterLink>
                        <FilterLink to="/blog/security">Security</FilterLink>
                        <FilterLink to="/blog/technology">Technology</FilterLink>
                    </S.Filter>
                </>
                )
            }
            <S.Main>{Array.from(Array(4), (e, idx) => {
                return (
                    <PostCard key={idx} />
                )
            })}</S.Main>
            {props.home &&
                <S.Footer to="/blog">
                    All articles
                    <S.Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5"/>
                    </S.Svg>
                </S.Footer>
            }
            
        </S.Section>
    )
}

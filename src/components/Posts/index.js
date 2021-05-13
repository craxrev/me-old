import { graphql, StaticQuery } from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"

import PostCard from "../PostCard"

import * as S from "./styles"

export default function Posts({ home, related, posts }) {
    const FilterLink = props => (
        <S.FilterLink {...props} activeClassName="active" />
    )

    return (
        <S.Section home={home}>
            {home ? (
                <S.Header>
                    <S.Text>Selected Articles</S.Text>
                </S.Header>
            ) : related ? (
                <S.Header related>
                    <S.Text>Related Articles</S.Text>
                    <S.Index to="/blog">
                        All articles
                        <S.Svg
                            width="18"
                            height="15"
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5" />
                        </S.Svg>
                    </S.Index>
                </S.Header>
            ) : (
                <>
                    <S.PageHeader>Articles</S.PageHeader>
                    <S.Filter>
                        <FilterLink to="/blog">All</FilterLink>
                        <StaticQuery
                            query={graphql`
                                query {
                                    allMarkdownRemark {
                                        group(field: frontmatter___category) {
                                            fieldValue
                                        }
                                    }
                                }
                            `}
                            render={({ allMarkdownRemark: { group } }) =>
                                group.map(category => (
                                    <FilterLink
                                        key={category.fieldValue}
                                        to={`/blog/${kebabCase(
                                            category.fieldValue
                                        )}`}
                                    >
                                        {category.fieldValue}
                                    </FilterLink>
                                ))
                            }
                        />
                    </S.Filter>
                </>
            )}
            <S.Main>
                {posts.map(post => (
                    <PostCard key={post.id} data={post} />
                ))}
            </S.Main>
            {home && (
                <S.Footer>
                    <span></span>
                    <S.Index to="/blog">
                        All articles
                        <S.Svg
                            width="18"
                            height="15"
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <S.Path d="M0 7.5H16M16 7.5L10.3333 1.5M16 7.5L10.3333 13.5" />
                        </S.Svg>
                    </S.Index>
                </S.Footer>
            )}
        </S.Section>
    )
}

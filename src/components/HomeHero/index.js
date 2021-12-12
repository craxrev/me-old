import { graphql, StaticQuery } from "gatsby"
import React from "react"

import * as S from "./styles"

export default function HomeHero({ data }) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            name
                            title
                            subtitle
                            description
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { name, title, subtitle, description },
                },
            }) => (
                <S.Section>
                    <S.H6>{name} - portfolio 20xx</S.H6>
                    <S.H1>{title}</S.H1>
                    <S.H4>{subtitle}</S.H4>
                    <S.P>{description}</S.P>
                    <S.Svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <S.Path d="M7 -2.62268e-07L7 16M7 16L13 10.3333M7 16L0.999999 10.3333" />
                    </S.Svg>
                </S.Section>
            )}
        />
    )
}

import React from "react"
import { graphql, StaticQuery } from "gatsby"

import * as S from "./styles"

export default function Footer() {
    const PageLink = props => <S.PageLink {...props} activeClassName="active" />

    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            email
                            github
                            twitter
                            linkedin
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { name, email, github, twitter, linkedin },
                },
            }) => (
                <S.Footer>
                    <S.Container>
                        <S.Content>
                            <S.Main>
                                <S.Header>Get in touch</S.Header>
                                <S.Email href={`mailto:${email}`}>
                                    {email}
                                </S.Email>
                            </S.Main>
                            <S.Links>
                                <S.Pages>
                                    <PageLink to="/">Home</PageLink>
                                    <PageLink to="/about">About</PageLink>
                                    <PageLink to="/blog">Articles</PageLink>
                                </S.Pages>
                                <S.Socials>
                                    <S.A href={github} target="_blank">
                                        Github
                                    </S.A>
                                    <S.A href={twitter} target="_blank">
                                        Twitter
                                    </S.A>
                                    <S.A href={linkedin} target="_blank">
                                        Linkedin
                                    </S.A>
                                </S.Socials>
                                <S.Other>
                                    <S.PageLink to="#"><s>Tags</s></S.PageLink>
                                    <S.PageLink to="#"><s>Feed</s></S.PageLink>
                                </S.Other>
                            </S.Links>
                            <S.Svg
                                width="14"
                                height="18"
                                viewBox="0 0 14 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <S.Path d="M7 15.5055L7 1.99995M7 1.99995L1 6.78316M7 1.99995L13 6.78316" />
                            </S.Svg>
                        </S.Content>
                        <S.Copyrights>
                            <S.LeftText>
                                © {new Date().getFullYear()} {name}
                            </S.LeftText>
                            <S.RightText>
                                Design by <S.InlineA>Malek Chourabi</S.InlineA>
                            </S.RightText>
                        </S.Copyrights>
                        <S.Info>
                            This site is built with{" "}
                            <S.InlineA
                                href="https://www.gatsbyjs.com/"
                                target="_blank"
                            >
                                Gatsby
                            </S.InlineA>{" "}
                            and hosted on{" "}
                            <S.InlineA
                                href="https://www.netlify.com/"
                                target="_blank"
                            >
                                Netlify
                            </S.InlineA>
                            . The source code is hosted on{" "}
                            <S.InlineA
                                href="https://github.com/craxrev/me"
                                target="_blank"
                            >
                                Github
                            </S.InlineA>
                            .
                        </S.Info>
                    </S.Container>
                </S.Footer>
            )}
        />
    )
}

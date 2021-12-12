import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Data from "../../../content/about.yaml"

import * as S from "./styles"

export default function Bio() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            name
                            github
                            twitter
                            linkedin
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { name, github, twitter, linkedin },
                },
            }) => (
                <S.Bio>
                    <S.Name>{name}</S.Name>
                    <S.Image>
                        <StaticImage
                            src="../../assets/images/me.png"
                            alt={name}
                            placeholder="blurred"
                        />
                    </S.Image>
                    <S.Section>
                        <S.Title>Manifesto</S.Title>
                        <S.Content>
                            <S.Paragraph>
                                {Data.manifesto
                                    .split("\n")
                                    .join(String.fromCharCode(10, 10))}
                            </S.Paragraph>
                        </S.Content>
                    </S.Section>
                    <S.Section>
                        <S.Title>Inventory</S.Title>
                        <S.Content>
                            <S.Column>
                                <S.Header>Frameworks</S.Header>
                                <S.List>
                                    {Data.inventory.frameworks.map(
                                        (framework, idx) => (
                                            <li key={idx}>{framework}</li>
                                        )
                                    )}
                                </S.List>
                            </S.Column>
                            <S.Column>
                                <S.Header>Technologies</S.Header>
                                <S.List>
                                    {Data.inventory.technologies.map(
                                        (technology, idx) => (
                                            <li key={idx}>{technology}</li>
                                        )
                                    )}
                                </S.List>
                            </S.Column>
                            <S.Column>
                                <S.Header>Tools</S.Header>
                                <S.List>
                                    {Data.inventory.tools.map((tool, idx) => (
                                        <li key={idx}>{tool}</li>
                                    ))}
                                </S.List>
                            </S.Column>
                        </S.Content>
                    </S.Section>
                    <S.Section>
                        <S.Title>Socials</S.Title>
                        <S.Content>
                            <S.Links>
                                <S.Link href={github} target="_blank">
                                    Github
                                    <S.LinkSvg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <S.Path d="M5.24264 17.5561L16.5563 6.24241M16.5563 6.24241L8.30677 6.00671M16.5563 6.24241L16.7921 14.492" />
                                    </S.LinkSvg>
                                </S.Link>
                                <S.Link href={twitter} target="_blank">
                                    Twitter
                                    <S.LinkSvg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <S.Path d="M5.24264 17.5561L16.5563 6.24241M16.5563 6.24241L8.30677 6.00671M16.5563 6.24241L16.7921 14.492" />
                                    </S.LinkSvg>
                                </S.Link>
                                <S.Link href={linkedin} target="_blank">
                                    Linkedin
                                    <S.LinkSvg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <S.Path d="M5.24264 17.5561L16.5563 6.24241M16.5563 6.24241L8.30677 6.00671M16.5563 6.24241L16.7921 14.492" />
                                    </S.LinkSvg>
                                </S.Link>
                            </S.Links>
                        </S.Content>
                    </S.Section>
                </S.Bio>
            )}
        />
    )
}

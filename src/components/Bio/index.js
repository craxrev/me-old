import React from "react"

import MeImg from "../../assets/images/me.png"

import * as S from "./styles"

export default function Bio() {
    return (
        <S.Bio>
            <S.Name>mortadha ghanmi</S.Name>
            <S.Image src={MeImg} alt="mortadha ghanmi" />
            <S.Section>
                <S.Title>Manifesto</S.Title>
                <S.Content>
                    <S.Paragraph>
                        Mortadha is a full-stack developer at Beecoop. <br />
                        <br />
                        Before that, he was a freelancer working only on
                        front-end projects, after accumalting so much experience
                        in most of the modern front-end frameworks, he's started
                        since improving his backend skill, and now he's more
                        interested in system architecture and security. <br />
                        <br />
                        He loves reading Technical blogs, be it at practical or
                        the theoric side of it! he's grateful of that shared
                        knowlegde and he's giving back.. he's started one
                        himself!
                    </S.Paragraph>
                </S.Content>
            </S.Section>
            <S.Section>
                <S.Title>Inventory</S.Title>
                <S.Content>
                    <S.Column>
                        <S.Header>Frameworks</S.Header>
                        <S.List>
                            <li>Angular, Gatsby</li>
                            <li>Symfony, Yii2</li>
                            <li>Wordpress</li>
                            <li>Flask</li>
                        </S.List>
                    </S.Column>
                    <S.Column>
                        <S.Header>Technologies</S.Header>
                        <S.List>
                            <li>Vim</li>
                            <li>Docker, linux, </li>
                            <li>Python, Bash, C, C++</li>
                        </S.List>
                    </S.Column>
                    <S.Column>
                        <S.Header>Tools</S.Header>
                        <S.List>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>code oss</li>
                        </S.List>
                    </S.Column>
                </S.Content>
            </S.Section>
            <S.Section>
                <S.Title>Socials</S.Title>
                <S.Content>
                    <S.Links>
                        <S.Link href="https://dev.craxrev.me" target="_blank">
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
                        <S.Link href="https://dev.craxrev.me" target="_blank">
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
                        <S.Link href="https://dev.craxrev.me" target="_blank">
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
    )
}

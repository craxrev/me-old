import React from "react"

import * as S from "./styles"

export default function Post(props) {
    const TagLink = props => (
        <li>
            <S.Tag {...props} />
        </li>
    )

    return (
        <>
            <S.Header>
                <S.Category>front end</S.Category>
                <S.Title>
                    Why a design system is the key to scaling accessibility
                </S.Title>
                <S.Info>August 26, 2020 &#9679; 5 min read</S.Info>
                <S.Tags>
                    <TagLink to="/tag/angular">#angular</TagLink>
                    <TagLink to="/tag/frontend">#frontend</TagLink>
                    <TagLink to="/tag/design_system">#design_system</TagLink>
                </S.Tags>
                <S.Cover
                    alt="placeholder"
                    src="https://via.placeholder.com/1147x838"
                />
            </S.Header>
            <S.Article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et. Nunc fermentum sit eu, arcu,
                    ullamcorper scelerisque tincidunt cras. Morbi nisl tellus
                    orci risus porttitor ullamcorper. Amet orci sem id diam
                    rhoncus velit feugiat netus. Aliquet velit enim sagittis
                    cursus urna. <br />
                    <br />
                    Neque eu tristique sit non. Volutpat felis porta viverra
                    interdum fringilla. Odio tristique ut consequat tempus.
                    Molestie diam rhoncus sodales dui. Netus nec aliquam urna
                    odio turpis gravida.
                </p>
                <q>The challenge: unified branding</q>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et. Nunc fermentum sit eu, arcu,
                    ullamcorper scelerisque tincidunt cras. Morbi nisl tellus
                    orci risus porttitor ullamcorper.
                </p>
                <img
                    alt="placeholder"
                    src="https://via.placeholder.com/3000x1500"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et. Nunc fermentum sit eu, arcu,
                    ullamcorper scelerisque tincidunt cras. Morbi nisl tellus
                    orci risus porttitor ullamcorper. Amet orci sem id diam
                    rhoncus velit feugiat netus. Aliquet velit enim sagittis
                    cursus urna. <br />
                    <br />
                    Neque eu tristique sit non. Volutpat felis porta viverra
                    interdum fringilla. Odio tristique ut consequat tempus.
                    Molestie diam rhoncus sodales dui. Netus nec aliquam urna
                    odio turpis gravida.
                </p>
                <ul>
                    <li>
                        <strong>empor facilisi faucibus</strong> massa tempor
                        massa.
                    </li>
                    <li>
                        Molestie diam rhoncus sodales dui. Netus nec aliquam
                        urna odio turpis gravida.
                    </li>
                    <li>
                        Volutpat felis porta viverra interdum fringilla. Odio
                        tristique ut consequat tempus.
                    </li>
                    <li>
                        At ornare risus rutrum sit laoreet faucibus molestie.
                    </li>
                </ul>
                <h2>Benefit: reduced friction during onboarding</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et. Nunc fermentum sit eu, arcu,
                    ullamcorper scelerisque tincidunt cras. Morbi nisl tellus
                    orci risus porttitor ullamcorper.
                </p>
                <img
                    alt="placeholder"
                    src="https://via.placeholder.com/784x577"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    ornare risus rutrum sit laoreet faucibus molestie. Vivamus
                    pretium, pharetra commodo cras suspendisse est, nibh. Ut
                    iaculis id eu viverra amet, et. Nunc fermentum sit eu, arcu,
                    ullamcorper scelerisque tincidunt cras. Morbi nisl tellus
                    orci risus porttitor ullamcorper.
                </p>
            </S.Article>
        </>
    )
}

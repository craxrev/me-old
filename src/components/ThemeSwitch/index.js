import React from "react"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

import * as S from "./styles"

export default function ThemeSwitch() {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                theme === 'light' ?
                <S.Svg
                    onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light') }
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                >
                    <defs>
                        <mask id="mask">
                            <rect width="64" height="64" fill="white" />
                            <circle cx="36" cy="28" r="12" fill="black" id="circle_mask" />
                        </mask>
                    </defs>
                    <g mask="url(#mask)">
                        <circle cx="32" cy="32" r="12" fill="var(--text)" />
                    </g>
                    <g fill="var(--text)">
                        <path d="m35.269 24.873 1.2154 2.9196 3.2846 1.0804-3.2846 1.0804-1.2154 2.9196-1.2154-2.9196-3.2846-1.0804 3.2846-1.0804z" />
                        <path d="m37.943 23.676 1.6423-0.67522 0.6077-1.8248 0.6077 1.8248 1.6423 0.67522-1.6423 0.67522-0.6077 1.8248-0.6077-1.8248z" />
                    </g>
                    {/* <animate
                        xlinkHref="#circle_mask"
                        attributeName="cx"
                        from="48"
                        to="36"
                        dur="0.5s"
                        repeatCount="1" />
                    <animate
                        xlinkHref="#circle_mask"
                        attributeName="cy"
                        from="8"
                        to="28"
                        dur="0.5s"
                        repeatCount="1" /> */}
                </S.Svg>
                :
                <S.Svg
                    onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light') }
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                >
                    <defs>
                        <filter id="filter0_f" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                    <g fill="var(--text)">
                        <path
                            d="M 63,32 33.997762,32.26301 61.943701,40.02339 33.861617,32.771107 58.846788,47.5 33.598607,33.226654 53.92031,53.92031 33.226654,33.598607 47.5,58.846788 32.771107,33.861617 40.02339,61.943701 32.26301,33.997761 32,63 31.73699,33.997762 23.97661,61.943701 31.228893,33.861617 16.5,58.846788 30.773346,33.598607 10.07969,53.92031 30.401393,33.226654 5.1532125,47.5 30.138383,32.771107 2.0562994,40.02339 30.002239,32.26301 1,32 30.002238,31.73699 2.0562994,23.97661 30.138383,31.228893 5.1532125,16.5 30.401393,30.773346 10.07969,10.07969 30.773346,30.401393 16.5,5.1532125 31.228893,30.138383 23.97661,2.0562994 31.73699,30.002239 32,1 32.26301,30.002238 40.02339,2.0562994 32.771107,30.138383 47.5,5.1532125 33.226654,30.401393 53.92031,10.07969 33.598607,30.773346 58.846788,16.5 33.861617,31.228893 61.943701,23.97661 33.997761,31.73699 Z"
                            id="rays_1" />
                        <circle cx="32" cy="32" r="12" />
                    </g>
                    <g filter="url(#filter0_f)">
                        <circle cx="32" cy="32" r="12" fill="var(--text)" />
                    </g>
                    <animateTransform
                        xlinkHref="#rays_1"
                        attributeName="transform"
                        type="rotate"
                        from="0 32 32"
                        to="360 32 32"
                        dur="60s"
                        additive="sum"
                        repeatCount="indefinite" />
                </S.Svg>
            )}
        </ThemeToggler>
    )
}

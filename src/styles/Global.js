import { createGlobalStyle } from "styled-components"

import { header, body } from "./Type"
import * as Colors from "./Colors"

export const GlobalStyle = createGlobalStyle`

    /* Resets */

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }
    body { /* TODO: fix visible space in footer componenet */
        /* margin: 0 0 0 calc(100vw - 100%); */
        margin: 0;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    a {
        background-color: transparent;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    small {
        font-size: 80%;
    }
    img {
        border-style: none;
    }

    /* custom resets */

    h1, h2, h3, h4, h5, h6,
    p,
    a {
        margin: 0;
    }

    /* Type */

    body {
        ${body}
    }

    h1, h2, h3, h4, h5, h6 {
        ${header}
    }

    /* Colors */

    body {
        --bg: ${Colors.solarisLight0};
        --bg-alt: ${Colors.solarisLight1};
        --text: ${Colors.solarisLight9};
        --text-alt: ${Colors.solarisLight5};
        --selection: ${Colors.solarisLight4};
        --golden: ${Colors.gold};
        --img-bg: ${Colors.solarisLight2};

        background-color: var(--bg);
    }
    body.dark {
        --bg: ${Colors.solarisDark0};
        --bg-alt: ${Colors.solarisDark1};
        --text: ${Colors.solarisDark9};
        --text-alt: ${Colors.solarisDark5};
        --selection: ${Colors.solarisDark4};
    }

    ::selection {
        background-color: var(--selection);
    }

    /* Transitions */
    
    /* TODO: implement optional transition toggling, i.e. prefers-reduced-motion */

    body {
        transition: background-color 500ms;
    }

    h1, h2, h3, h4, h5, h6,
    p,
    a {
        transition: color 500ms, box-shadow 500ms;
    }

    div {
        transition: background-color 500ms;
    }

    path {
        transition: stroke 500ms;
    }

    footer {
        transition: background-color 500ms;
    }

    /* Utilities */
    body.no-scroll {
        overflow: hidden;
    }
    body.no-scroll .translated-y {
        transform: translateY(0) !important;
    }
    body.custom-cursor * {
        cursor: none;
    }

    /* testing below */

    
`

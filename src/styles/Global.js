import { createGlobalStyle } from "styled-components"

import * as Colors from "./Colors"

export const GlobalStyle = createGlobalStyle`

    /* Resets */

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0 0 0 calc(100vw - 100%);
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

    /* Sizes */

    html {
        font-size: min(max(1rem, 4vw), 22px);
    }

    /* Colors */

    body {
        --bg: ${Colors.solarisLight0};
        --text: ${Colors.solarisLight9};
        --text-alt: ${Colors.solarisLight5};
        --bg-footer: ${Colors.solarisLight1};
        --selection: ${Colors.solarisLight4};
        --golden: ${Colors.gold};

        background-color: var(--bg);
    }
    body.dark {
        --bg: ${Colors.solarisDark0};
        --text: ${Colors.solarisDark9};
        --text-alt: ${Colors.solarisDark5};
        --bg-footer: ${Colors.solarisDark1};
        --selection: ${Colors.solarisDark4};
    }

    ::selection {
        background-color: var(--selection);
    }

    /* Transitions */

    body,
    h1,
    p,
    a {
        transition:
            background-color 500ms,
            color 500ms;
    }

    /* testing below */

    h1 {
        font-family: "Sequel";
        text-transform: uppercase;
        // font-size: 6.25em;
        color: var(--text);
    }
    p {
        font-family: "Inter";
        font-weight: 400;
        // font-size: 1.25em;
        color: var(--text);
    }
    a {
        font-family: "Inter";
        font-weight: 700;
        // font-size: 2em;
        color: var(--text);
    }
    a[aria-current] {
        color: var(--text-alt);
    }
`

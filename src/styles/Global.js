import { createGlobalStyle } from "styled-components"

import * as Colors from "./Colors"

export const GlobalStyle = createGlobalStyle`
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }
    body {
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

    /* Colors */

    body {
        --bg: ${Colors.solarisLight0};
        --text: ${Colors.solarisLight2};
        --grey: ${Colors.gray};
        --bg-footer: ${Colors.solarisLight1};

        background-color: var(--bg);
    }
    body.dark {
        --bg: ${Colors.solarisDark0};
        --text: ${Colors.solarisDark2};
        --bg-footer: ${Colors.solarisDark1};
    }

    /* Transitions */

    body,
    h1,
    p {
        transition: background-color 500ms;
    }



    /* testing below */

    h1 {
        color: var(--text);
    }
    p {
        color: var(--text);
    }
`

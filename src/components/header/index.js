import React from "react"
import { Link } from "gatsby"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <button
                        onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? 'dark' : 'light'} mode
                    </button>
                )}
            </ThemeToggler>
        </header>
    )
}

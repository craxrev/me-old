import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

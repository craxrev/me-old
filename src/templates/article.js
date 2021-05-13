import React from "react"

import Post from "../components/Post"
import Posts from "../components/Posts"

export default function Article() {
    return (
        <div>
            <Post />
            <Posts related />
        </div>
    )
}

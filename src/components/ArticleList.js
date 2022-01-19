import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    console.log(posts)
    const eachPost = posts.map((post) => {
        return (
            <div key={post.id}>
                <Article title={post.title} date={post.date} preview={post.preview}/>
            </div>
        )
    })
    return (
        <main>
        {eachPost}
        </main>
    )
}
export default ArticleList;
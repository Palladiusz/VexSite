import React, { useState } from "react";
import Post from "./Post";
import Create from "./Create"


function Home() {

    const [posts, setPosts] = useState([]);

    function addPost(newPost) {
        setPosts(prevPosts => {
            return [...prevPosts, newPost];
        });
    };


    return (
        <div>
            <div><Create onAdd={addPost} /></div>
        {posts.map(postItem => {
            return (
                <Post
                title={postItem.title}
                content={postItem.content}
                />
            )
        })}
        </div>
    )

}

export default Home;
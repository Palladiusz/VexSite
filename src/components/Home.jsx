import React from "react";
import Post from "./Post";


function Home(props) {



    return (
        <div>
        {props.posts.map((postItem, index) => {
            return (
                <Post
                key={index}
                id={index}
                title={postItem.title}
                content={postItem.content}
                />
            )
        })}

        </div>
    )

}

export default Home;
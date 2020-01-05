import React, { useState } from "react";

function Create(props) {

    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setPost(prevPost => {
            return {
                ...prevPost,
                [name]: value
            };
        });
    };

    function submitPost(event) {
        props.onAdd(post);

        event.preventDefault();
    }

    return (
        <form>
        <div className="input-group container-fluid">
        
        <input onChange={handleChange} value={post.title} type="text" name="title" placeholder="Title" />
        <input onChange={handleChange} value={post.content} type="textarea" name="content" placeholder="Content........" />

        <button onClick={submitPost} className="btn btn-lg btn-primary btn-create" type="submit">SUBMIT</button>
        
        </div>
        </form>
    )

}

export default Create;
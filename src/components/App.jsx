import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import Create from "./Create"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

    const [posts, setPosts] = useState([]);

    function addPost(newPost) {
        setPosts(prevPosts => {
            return [...prevPosts, newPost];
        });
    };

    


    return (
        <Router>
        <div>
        <Header />       
            <Switch>
                <Route path="/" exact render={(props) => <Home {...props} posts={posts} />} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/create" component={() => <Create onAdd={addPost} />} />
            </Switch>
        </div>
        </Router>

    );

}



export default App;
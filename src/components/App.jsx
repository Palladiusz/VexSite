import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import Create from "./Create"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {



    return (
        <Router>
        <div>
        <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/create" component={Create} />
            </Switch>
        </div>
        </Router>

    );

}



export default App;
import React from "react";
import ChatIcon from '@material-ui/icons/Chat';
import loli from "../images/loli.jpg"

function Post(props) {
    return(
        <div className="container-fluid col-lg">
            <div className="card">
                <div class="card-header">
                    <img src={loli} className="card-img-top" alt="Img-1"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.content}</p>

                </div>
                <footer>
                    <p>Opublikowano: 30.20.3000r.</p>
                    <a href="#" className="card-link">Komentarze
                        <ChatIcon/></a>
                    <a href="#" className="card-link">Czytaj więcej...</a>

                </footer>
            </div>
        </div>
    )

}

export default Post;
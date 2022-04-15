import React from "react";
import ReactDOM from 'react-dom';
import Game from "../GameControl/Game";

export default function Welcome () {
    const handlerClickReact = () => {
        return (
            ReactDOM.render(
                <React.StrictMode>
                  <Game />
                </React.StrictMode>,
                document.querySelector('#root')
              )     
        )
    }

    return (
        <div className="helloWindow">
            <h1>
                Welcome to my implementation of the popular game 2048
            </h1>
            <div className="verJS">
                <h3>Choice Javascript version</h3>
                <a href="http://127.0.0.1:5500/index.html">
                    <button
                        className="but butJS"
                    />
                </a>
            
            </div>
            <div className="verReact">
                <h3>Choice React version</h3>
                <button onClick={handlerClickReact} className="but butRec"/>
            </div>
        </div>
    )
}
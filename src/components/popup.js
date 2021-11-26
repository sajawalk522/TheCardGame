
import React from "react";
import { useSelector } from "react-redux";

const Popup = (props) => {
    const players = useSelector((state) => state.players.selectedPlayer);
    const closeModel = () => {
        props.closeModel()
    }
    return <>
    {players &&
        <div className="model">
        <div className="model-inner">
           <h2>SUCCESS</h2>
            <ul>
                <li>{players && players.RealName}</li>
                <li>{players && players.PlayerName}</li>
                <li>{players && players.assets}</li>
            </ul>
            <div className="close-btn">
                <button className="btn" onClick={() => closeModel()}>OK</button>
            </div>
        </div>
    </div>
    }</>
}

export default Popup;
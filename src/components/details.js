import React from "react";
import { useSelector } from "react-redux";
const Details = () => {
    const players = useSelector((state) => state.players.selectedPlayer);
    return (
        <>
            {players && <section className="view-detail">
                <div className="detail-heading">
                    <h1>Details</h1>
                </div>
                <div className="detail-list">
                    <ul>
                        <li><span>Real Name:</span> <span>{players.RealName}</span></li>
                        <li><span>Player Name:</span> <span>{players.PlayerName}</span></li>
                        <li><span>Assets:</span> <span>{players.assets}</span></li>
                    </ul>
                    <div className="view-button">
                        <button className="btn"> CONTINUE</button>
                    </div>
                </div>
            </section>}
        </>
    );
};
export default Details
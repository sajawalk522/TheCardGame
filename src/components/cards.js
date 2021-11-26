import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectPlayer } from "../store/actions/cardActions";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const players = useSelector((state) => state.players.playersData);
  const dispatch = useDispatch();

  const selectedCard = (player) => {
    window.scrollTo(0, 0);
    setActiveCard(player.id);
    dispatch(selectPlayer(player));
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <article className="overview">
        <h1>Overview</h1>
        <div className="overview-cards">
          {players && players.map((player, index) => {
            return (<div key={index} onClick={() => selectedCard(player)} className={`card ${activeCard === player.id ? 'active' : ''}`}>
              <ul>
                <li><span>Real Name:</span> <span>{player.RealName}</span></li>
                <li><span>Player Name:</span> <span>{player.PlayerName}</span></li>
                <li><span>Assets:</span> <span>{player.assets}</span></li>
              </ul>
             <div className="view-button">
             <button className="btn">View Details</button>
             </div>
            </div>)
          })}
        </div>
      </article>
    </div>
  );
};

export default Cards;

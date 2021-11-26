import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "./popup";
import { sortAsc, sortDesc } from "../store/actions/cardActions";
const Details = () => {
    const dispatch = useDispatch();
    const [popUp, setPopUp] = useState(false);
    const submitObj = () => {
        setPopUp(!popUp);
    };
    const closeModel = () => {
        setPopUp(false);
    };
    return (
        <aside>
            {popUp && <Popup closeModel={() => closeModel()} />}
            <h1>Controls</h1>
            <div className="control-button">
                <button className="btn" onClick={() => dispatch(sortAsc())}>SORT ASC</button>
                <button className="btn" onClick={() => dispatch(sortDesc())} >SORT DESC</button>
            </div>
            <div className="submit-button">
                <button className="btn" onClick={() => submitObj()}>SUBMIT</button>
            </div>

        </aside>
    );
};
export default Details
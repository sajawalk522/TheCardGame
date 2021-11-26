import React from "react";
import Cards from "./cards";
import Details from "./details";
import Controls from "./controls";
const Main = () => {
    return (
        <div className="container">
            <div className="primary-container">
                <Details />
                <Cards />
            </div>
            <div className="secondary-container">
                <Controls />
            </div>
        </div>
    );
};
export default Main
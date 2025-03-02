import React from "react";


const Card = ({ cityName, temperature, weatherCondition }) => {
    return (
        <div className="bg-light-gray br3 pa4 ma3 shadow-5 w-40 tc">
            <h2 className="f3 navy">{cityName}</h2>
            <h1 className="f1 dark-red">{temperature}°C</h1>
            <h3 className="f4 dark-gray">{weatherCondition}</h3>
        </div>
    );
};

export default Card;
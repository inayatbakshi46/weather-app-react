import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const Weather = (props) => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();

  const Day = dayNames[day];
  const Month = monthNames[month];

  return (
    <div className="min-h-[80vh] p-8 flex flex-col justify-center space-y-8">
      <div className="min-h-[20vh] flex flex-col justify-center items-start space-y-8">
      <h1 className="text-lg font-bold tracking-wider">{props.data.name} &mdash; {props.data.sys.country} </h1>
      <h2>
        {Day} &mdash; <span>{date} {Month} </span>
      </h2>
      <h3 className="text-8xl font-bold tracking-wider ">{Math.floor(props.data.main.temp)}°C</h3>
      </div>
      <div className="min-h-[10vh] flex items-center justify-between">
      <h4 className="font-bold capitalize tracking-wider ">{props.data.weather[0].description}</h4>
        <p className="font-bold tracking-wider "> <FontAwesomeIcon icon={faTemperatureHigh} /> {props.data.main.temp_max} &mdash; <FontAwesomeIcon icon={faTemperatureLow} /> {props.data.main.temp_min}</p>
      </div>
      <div className="min-h-[10vh] flex items-center justify-between">
      <p className="tracking-wider">Wind: {props.data.wind.speed} m/s</p>
        <p className="tracking-wider">Humidity: {props.data.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;

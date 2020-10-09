import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faWind, faArrowRight, faTint } from '@fortawesome/free-solid-svg-icons';
import WeatherIcon from '../WeatherIcon';

import '../../styles/css/index.css';

library.add(faThermometerHalf, faWind, faArrowRight, faTint);

const WeatherData = (props) => {
    const date = new Date().toLocaleDateString();
    const unixTimeStamp = new Date(props.weather.dt * 1000); 
    const utcHour = unixTimeStamp.getUTCHours();
    const utcMinutes = unixTimeStamp.getMinutes(); 
    const timeZone = ((props.weather.timezone) / 3600);
    const localTime = utcHour + timeZone + ":" + utcMinutes;
    console.log(props.weather);
    return(
        <div className="weatherContainer">
            <div className="dateTimeContainer">
                <div className="date">
                    {date}
                    <p>data</p>
                </div>
                <div className="localTime">
                    {localTime}
                    <p>hora local</p>
                </div>
                <div className="utcTime">
                    {utcHour + ":" + utcMinutes}
                    <p>hora UTC</p>
                </div>
            </div>
            <div className="city">{props.weather.name}</div>
            <div className="icon">
                <WeatherIcon weather={props.weather}/>
            </div>
            <div className="temp">
                <FontAwesomeIcon icon="thermometer-half" />
                {props.weather.main.temp}°C
            </div>
            <div className="minDegree">
                {props.weather.main.temp_min}°C
                <p>min</p>
            </div>
            <div className="maxDegree">
                {props.weather.main.temp_max}°C
                <p>máx</p>
            </div>
            <div className="wind">
                <div className="windDirection">
                    <FontAwesomeIcon icon="arrow-right" className="directionIcon"/>
                    {props.weather.wind.deg}°
                    <p>direção vento</p>
                </div>
                <div className="windSpeed">
                    <FontAwesomeIcon icon="wind" className="speedIcon"/>
                    {props.weather.wind.speed} Kn
                    <p>velocidade vento</p>
                </div>
            </div>
            <div className="humidity">
                <FontAwesomeIcon icon="tint" className="humidityIcon"/>
                {props.weather.main.humidity}%
                <p>umidade</p>
            </div>
        </div>
    );
}

export default WeatherData;
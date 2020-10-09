import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import WeatherData from '../WeatherData';
import Error from '../Error';
import Background from '../Background';

import '../../styles/css/index.css';

const Main = () => {
    const [weather, setWeather] = useState();
    const [error, setError] = useState();
    
    const api = async e => {
        e.preventDefault();
        const location = e.target.elements.location.value
        if(!location) {
            setWeather(null);
            return setError("Por favor, insera o nome da localidade.");
        }
        try{
            const API_KEY = "498f560030e589f593227978c771b4e9";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
            const request = axios.get(url);
            const response = await request;
            setWeather(response.data);
            setError(null);
        } catch (err) {
            setWeather(null);
            return setError("Localidade não localizada, por favor insera o nome da localidade corretamente.");
        }
    }  
  
    return(
        <div>
            { weather && <Background weather={weather} /> } 
            <div className="mainContainer">
                <Header api={api} className="header" />
                { weather && <WeatherData weather={weather} className="data"/> }
                { error && <Error error={error} /> }
            </div>
        </div>
    );
}

export default Main;
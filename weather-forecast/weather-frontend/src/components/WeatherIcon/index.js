import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSun,
    faCloud,
    faCloudMoon,
    faCloudMoonRain,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun, 
    faCloudSunRain, 
    faMoon, 
    faSmog, 
    faSnowflake, 
    faBolt,
    faImage
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faSun, 
    faCloudSun, 
    faCloudSunRain, 
    faCloud, 
    faCloudRain, 
    faCloudShowersHeavy, 
    faCloudMoon, 
    faCloudMoonRain, 
    faMoon,
    faSmog,
    faSnowflake,
    faBolt,
    faImage
);

const WeatherIcon = (props) => {   
    const unixTimeStamp = new Date(props.weather.dt * 1000); 
    const utcHour = unixTimeStamp.getUTCHours(); 
    const timeZone = ((props.weather.timezone) / 3600);
    const localTime = utcHour + timeZone;
    function dayOrNight(day){
        if(localTime >= 6 && localTime <= 18){
            day = true;
        } else if(localTime > 18 || localTime < 6){
            day = false;
        }
        return day;
    }
        
    const weatherMain = (props.weather.weather); 
    function icon (currentIcon){
        if (dayOrNight() === true && weatherMain[0].description === "clear sky"){
            currentIcon = faSun;
        } else if(dayOrNight() === true && weatherMain[0].description === "few clouds"){
            currentIcon = faCloudSun;
        } else if(dayOrNight() === true && weatherMain[0].description === "scattered clouds"){
            currentIcon = faCloudSun;
        } else if(dayOrNight() === true && weatherMain[0].description === "overcast clouds"){
            currentIcon = faCloud;
        } else if(dayOrNight() === true && weatherMain[0].description === "broken clouds"){
            currentIcon = faCloud;
        } else if(dayOrNight() === true && weatherMain[0].description === "light intensity shower rain"){
            currentIcon = faCloudSunRain;
        } else if(dayOrNight() === true && weatherMain[0].description === "shower rain"){
            currentIcon = faCloudSunRain;
        } else if(dayOrNight() === true && weatherMain[0].description === "light rain"){
            currentIcon = faCloudSunRain;
        } else if(dayOrNight() === true && weatherMain[0].description === "moderate rain"){
            currentIcon = faCloudRain;
        } else if(dayOrNight() === true && weatherMain[0].description === "heavy intensity rain"){
            currentIcon = faCloudShowersHeavy;
        } else if(dayOrNight() === true && weatherMain[0].description === "heavy rain"){
            currentIcon = faCloudShowersHeavy;
        } else if(dayOrNight() === true && weatherMain[0].description === "fog"){
            currentIcon = faSmog;
        } else if(dayOrNight() === true && weatherMain[0].description === "mist"){
            currentIcon = faSmog;
        } else if(dayOrNight() === true && weatherMain[0].description === "smoke"){
            currentIcon = faSmog;
        } else if(dayOrNight() === true && weatherMain[0].description === "snow"){
            currentIcon = faSnowflake;
        }

        if (dayOrNight() === false && weatherMain[0].description === "clear sky"){
            currentIcon = faMoon;
        } else if(dayOrNight() === false && weatherMain[0].description === "few clouds"){
            currentIcon = faCloudMoon;
        } else if(dayOrNight() === false && weatherMain[0].description === "scattered clouds"){
            currentIcon =faCloudMoon;
        } else if (dayOrNight() === false && weatherMain[0].description === "overcast clouds"){
            currentIcon = faCloud;
        } else if (dayOrNight() === false && weatherMain[0].description === "broken clouds"){
            currentIcon = faCloud;
        } else if (dayOrNight() === false && weatherMain[0].description === "light intensity shower rain"){
            currentIcon = faCloudMoonRain;
        } else if(dayOrNight() === false && weatherMain[0].description === "shower rain"){
            currentIcon = faCloudMoonRain;
        } else if (dayOrNight() === false && weatherMain[0].description === "light rain"){
            currentIcon = faCloudMoonRain;
        } else if (dayOrNight() === false && weatherMain[0].description === "moderate rain"){
            currentIcon = faCloudRain;
        } else if (dayOrNight() === false && weatherMain[0].description === "heavy intensity rain"){
            currentIcon = faCloudShowersHeavy;
        } else if (dayOrNight() === false && weatherMain[0].description === "heavy rain"){
            currentIcon = faCloudShowersHeavy;
        } else if(dayOrNight() === false && weatherMain[0].description === "fog"){
            currentIcon = faSmog;
        } else if(dayOrNight() === false && weatherMain[0].description === "mist"){
                currentIcon = faSmog;
        } else if(dayOrNight() === false && weatherMain[0].description === "smoke"){
                currentIcon = faSmog;
        } else if(dayOrNight() === false && weatherMain[0].description === "snow"){
            currentIcon = faSnowflake;
        }
        return currentIcon;
    } 
    
    return (
        <div className="weatherIconDiv">
            <FontAwesomeIcon icon={icon()} size="8x" className="weatherIcon" />
        </div>
    );
}

export default WeatherIcon;
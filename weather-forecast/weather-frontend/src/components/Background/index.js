import React from 'react';

import clearDay from '../../images/clearDay.jpg';
import fewCloudDay from '../../images/fewCloudDay.jpg';
import cloudDay from '../../images/cloudDay.jpg';
import rainDay from '../../images/rainDay.jpg';
import stormDay from '../../images/stormDay.jpg';
import clearNight from '../../images/clearNight.jpg';
import fewCloudNight from '../../images/fewCloudNight.jpg';
import cloudNight from '../../images/cloudNight.jpg';
import rainNight from '../../images/rainNight.jpg';
import stormNight from '../../images/stormNight.jpg';
import fogDay from '../../images/fogDay.jpg';
import fogNight from '../../images/fogNight.jpg';
import snowDay from '../../images/snowDay.jpg';
import snowNight from '../../images/snowNight.jpg';
import smokeDay from '../../images/smokeDay.jpg';
import smokeNight from '../../images/smokeNight.jpg';

import '../../styles/css/index.css';

const Background = (props) => {
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
    function weatherImage (currentImage){
        if (dayOrNight() === true && weatherMain[0].description === "clear sky"){
            currentImage = clearDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "few clouds"){
            currentImage = clearDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "scattered clouds"){
            currentImage = fewCloudDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "overcast clouds"){
            currentImage = cloudDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "broken clouds"){
            currentImage = cloudDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "light intensity shower rain"){
            currentImage = rainDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "shower rain"){
            currentImage = rainDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "light rain"){
            currentImage = rainDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "moderate rain"){
            currentImage = rainDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "heavy intensity rain"){
            currentImage = stormDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "heavy rain"){
            currentImage = stormDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "fog"){
            currentImage = fogDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "mist"){
            currentImage = fogDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "smoke"){
            currentImage = smokeDay;
        } else if(dayOrNight() === true && weatherMain[0].description === "snow"){
            currentImage = snowDay;
        }

        if (dayOrNight() === false && weatherMain[0].description === "clear sky"){
            currentImage = clearNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "few clouds"){
            currentImage = clearNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "scattered clouds"){
            currentImage = fewCloudNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "overcast clouds"){
            currentImage = cloudNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "broken clouds"){
            currentImage = cloudNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "light intensity shower rain"){
            currentImage = rainNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "shower rain"){
            currentImage = rainNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "light rain"){
            currentImage = rainNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "moderate rain"){
            currentImage = rainNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "heavy intensity rain"){
            currentImage = stormNight;
        } else if (dayOrNight() === false && weatherMain[0].description === "heavy rain"){
            currentImage = stormNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "fog"){
            currentImage = fogNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "mist"){
            currentImage = fogNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "smoke"){
            currentImage = smokeNight;
        } else if(dayOrNight() === false && weatherMain[0].description === "snow"){
            currentImage = snowNight;
        }
        return currentImage;
    }
        
    return (
        <div className="background">
            <div className="backgroundImage">
                <img src={weatherImage()} alt="Weather" />
            </div>
        </div>
    );
}

export default Background;
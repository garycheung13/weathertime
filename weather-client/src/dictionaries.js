// icon imports
import clear from './images/weather_icons/clear.svg';
import cloudy from './images/weather_icons/cloudy.svg';
import drizzle from './images/weather_icons/drizzle.svg';
import fog from './images/weather_icons/fog.svg';
import rain from './images/weather_icons/rain.svg';
import snow from './images/weather_icons/snow.svg';
import storm from './images/weather_icons/storm.svg';
import fallback from './images/weather_icons/fallback.svg';

// background image imports
import clearBg from './images/backgrounds/clearBg.jpg';
import cloudyBg from './images/backgrounds/cloudyBg.jpg';
import drizzleBg from './images/backgrounds/drizzleBg.jpg';
import fogBg from './images/backgrounds/fogBg.jpg';
import rainBg from './images/backgrounds/rainBg.jpg';
import snowBg from './images/backgrounds/snowBg.jpg';
import stormBg from './images/backgrounds/stormBg.jpg';
import fallbackBg from './images/backgrounds/fallbackBg.jpg';

// cities included in app
// defines city specific information needed for app and api calls
export const cities = {
    "new-york": {
        id: 5128638,
        tz: "America/New_York",
        name: "New York",
        state: "NY"
    },
    "detroit": {
        id: 4990729,
        tz: "America/New_York",
        name: "Detroit",
        state: "MI"
    },
    "chicago": {
        id: 4887398,
        tz: "America/Chicago",
        name: "Chicago",
        state: "IL"
    },
    "san-francisco": {
        id: 5391959,
        tz: "America/Los_Angeles",
        name: "San Francisco",
        state: "CA"
    },
    "houston": {
        id: 4391354,
        tz: "America/Chicago",
        name: "Houston",
        state: "TX"
    }
}


// based on open weather api's groups
// defines gradient overlay color & background image for a specific weather condition
// https://openweathermap.org/weather-conditions
export const weather = {
    "thunderstorm": {
        backgroundImage: stormBg,
        icon: storm
    },
    "drizzle": {
        backgroundImage: drizzleBg,
        icon: drizzle
    },
    "rain": {
        backgroundImage: rainBg,
        icon: rain
    },
    "snow": {
        backgroundImage: snowBg,
        icon: snow
    },
    "atomsphere": {
        backgroundImage: fogBg,
        icon: fog
    },
    "clear": {
        backgroundImage: clearBg,
        icon: clear
    },
    "clouds": {
        backgroundImage: cloudyBg,
        icon: cloudy
    },
    "fog": {
        backgroundImage: fogBg,
        icon: fog
    },
    "haze": {
        backgroundImage: fogBg,
        icon: fog
    },
    "mist": {
        backgroundImage: fogBg,
        icon: fog
    },
    // incase the api responses with a condition not in the dict,
    // use a generic image and icon
    "fallback": {
        backgroundImage: fallbackBg,
        icon: fallback
    }
}
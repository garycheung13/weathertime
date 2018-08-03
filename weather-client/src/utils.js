import { weather } from './dictionaries';


// handle instances where weather key isn't in dict
export function findWeatherKey(key) {
    // check if the key is in dict, if not use a the generic options
    // this prevents app from falling if api responses with a weather condition not in the dict
    return weather[key] ? key : "fallback";
}
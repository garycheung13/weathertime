// cities included in app
// defines city specific information needed for app and api calls
export const cities = {
    NEWYORK: {
        id: 5128638,
        tz: "EST",
        name: "New York",
        state: "NY"
    },
    DETROIT: {
        id: 4990729,
        tz: "EST",
        name: "Detroit",
        state: "MI"
    },
    CHICAGO: {
        id: 4887398,
        tz: "CST",
        name: "Chicago",
        state: "IL"
    },
    SANFRANCISCO: {
        id: 5391959,
        tz: "PST",
        name: "San Francisco",
        state: "CA"
    },
    HOUSTON: {
        id: 4391354,
        tz: "CST",
        name: "Houston",
        state: "TX"
    }
}


// based on open weather api's groups
// defines gradient overlay color & background image for a specific weather condition
// https://openweathermap.org/weather-conditions
export const weather = {
    THUNDERSTORM: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    DRIZZLE: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    RAIN: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    SNOW: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    ATMOSPHERE: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    CLEAR: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
    CLOUDS: {
        leftColor: "#",
        rightColor: "#",
        backgroundImage: "#"
    },
}
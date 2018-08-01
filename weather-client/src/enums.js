// cities included in app
// defines city specific information needed for app and api calls
const cities = {
    NEWYORK: {
        id: 5128638,
        tz: "EST",
        city: "New York",
        state: "NY"
    },
    DETROIT: {
        id: 4990729,
        tz: "EST",
        city: "Detroit",
        state: "MI"
    },
    CHICAGO: {
        id: 4887398,
        tz: "CST",
        city: "Chicago",
        state: "IL"
    },
    SANFRANCISCO: {
        id: 5391959,
        tz: "PST",
        city: "San Francisco",
        state: "CA"
    },
    HOUSTON: {
        id: 4391354,
        tz: "CST",
        city: "Houston",
        state: "TX"
    }
}


// based on open weather api's groups
// defines gradient overlay color & background image for a specific weather condition
// https://openweathermap.org/weather-conditions
const weather = {
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
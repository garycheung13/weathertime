# Weathertime

Solution to coding test for Agency Within.

Project root contains files for the express server serving the project.

All React related files are in the `weather-client` directory.

It is deployed to a free heroku dyno. (Free dyno may need to reawaken and cause a slight delay during initial load)

View deployed app at https://weathertime-demo.herokuapp.com/.

## Libraries/Frameworks Used

- React: UI rendering (framework requirement for the test)
- React-router: client-side routing in the SPA
- Express: handling API calls to openweathermaps API without exposing API key
- moment.js: handling timezones

# openweathermap API Key

The server looks for an `API_KEY` variable in the environment variables to make API calls. This is stored in Heroku's config vars in production and in a local `.env` file in project root during development.
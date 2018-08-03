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

# Setting Up Locally

## Requirements
- Node version >= 6
- npm/yarn


## Steps
1. Download the project and install dependencies using `yarn install` or `npm install`. Run the command twice, once in the project root for the server packages and in the `weather-client` for the frontend packages.
2. Create a `.env` file in the project root and all your openweathermap api key to the file in the format of `API_KEY=YOUR_KEY`.
3. Start the server in development mode by running `yarn dev-start` or `npm run dev-start` from the project root.
4. Open a new terminal and change directory to `weather-client`. Run the commend `yarn start`/`npm start` to start the react app in development mode.

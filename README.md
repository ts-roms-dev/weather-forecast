
# Auth0 Embedded Login - Weather Forecast App

A React App implementing the Embedded Login with Auth0 and Weather Forecast integration
## :sparkles: Features
1. Authentication and Authorization on Auth0 Server.
2. A Homepage with City Search functionality.
3. A Weather forecast page to display the weather details.
4. A Landing page act as Login Page
5. The basic Login and Logout functionality with route protection.

## :footprints: Steps for Running the App Locally.
1. Clone the repo `git clone https://github.com/ts-roms/weather-forecast.git`
2. Install dependences directory. `npm install`
3. Create a file in `.env` and add the following code.

```.env
REACT_APP_DOMAIN=REACT_APP_DOMAIN
REACT_APP_CLIENT_ID=REACT_APP_CLIENT_ID
REACT_APP_REDIRECT_URI=http://localhost:3000/home
REACT_APP_AUDIENCE=REACT_APP_AUDIENCE
REACT_APP_SCOPE=REACT_APP_SCOPE
REACT_APP_GEO_API_KEY=REACT_APP_GEO_API_KEY
REACT_APP_GEO_URL=REACT_APP_GEO_URL
```

4. Install dotenv as a dev-dependency. `npm i --save-dev dotenv`.
5. Start the App from the root directory by `npm run start`.
6. Go to `http://localhost:3000`.

## Thanks! :star:
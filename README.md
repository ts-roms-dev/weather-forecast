
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
REACT_APP_DOMAIN=dev-dm7h5t7k.us.auth0.com
REACT_APP_CLIENT_ID=SBb6cmJEZq0HanszvBk3TzZBlJuRuVDg
REACT_APP_REDIRECT_URI=http://localhost:3000/home
REACT_APP_AUDIENCE=https://dev-dm7h5t7k.us.auth0.com/api/v2/
REACT_APP_SCOPE=read:current_user update:current_user_metadata
REACT_APP_GEO_API_KEY=0fc0a6669a2da1e81c8fb66ea93b91a2
REACT_APP_GEO_URL=https://api.openweathermap.org

REACT_APP_GITHUB_DOMAIN=dev-dm7h5t7k.us.auth0.com
REACT_APP_GITHUB_CLIENT_ID=9165098a937177ce6f6e
REACT_APP_GITHUB_SECRET_KEY=67411c74c8332e3ecc2b9c468edde6946224890c
REACT_APP_GITHUB_REDIRECT_URI=http://localhost:3000/home
REACT_APP_GITHUB_AUTHORIZATION=https://localhost:3000/login/callback


```

4. Install dotenv as a dev-dependency. `npm i --save-dev dotenv`.
5. Start the App from the root directory by `npm run start`.
6. Go to `http://localhost:3000`.

## Thanks! :star:

import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformWeather from './../services/transformWeather';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER';

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = value => {
    return dispatch => {
        dispatch(setCity(value));
        const api_forecast = getUrlForecastByCity(value)
        return fetch(api_forecast).then( 
            resolve => (resolve.json())
        ).then(data =>{
            const forecastData = transformForecast(data);
            dispatch(setForecastData({city:value, forecastData}))
        });
    }
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city)
            fetch(api_weather).then( resolve => {
                return resolve.json();
            }).then(weather_data =>{
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, weather }));
            });
        })
        
    }
    
    
}
import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

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
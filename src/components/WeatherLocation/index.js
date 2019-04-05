import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data } ) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} />}
    </div>  
);

WeatherLocation.propTypes = {
    onWeatherLocationClick: PropTypes.func,
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;
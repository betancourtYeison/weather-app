import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleonWeatherLocationClick = city => {
        onSelectedLocation(city)
    }
    
    const strToComponents = cities => (
        cities.map( city => 
            <WeatherLocation 
                key={city.key} 
                onWeatherLocationClick={() => handleonWeatherLocationClick(city.name)}
                city={city.name} 
                data={city.data}
                />)
    );

    return (
        <div className='LocationList'>
            { strToComponents(cities) }
        </div>
    )
};

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;
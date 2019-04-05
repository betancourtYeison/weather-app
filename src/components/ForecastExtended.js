import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForecastItem from './ForecastItem';
import './style.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(item => {
        return <ForecastItem key={`${item.weekDay}-${item.hour}`} weekDay={item.weekDay} hour={item.hour} data={item.data}/>
    });
}

const renderProgress = ()  => {
    return <CircularProgress size={50} />
}

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className='forecast-title'>
            Pronóstico Extendido para {city}
        </h2>
        { forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;
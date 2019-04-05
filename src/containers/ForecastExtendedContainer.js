import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCity, getForecastDataFromCities } from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            <ForecastExtended city={city} forecastData={forecastData}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStatetoProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, cities, setSelectedCity, city } = this.props
        setWeather(cities)
        setSelectedCity(city);
    }
    
    handleOnSelectedLocation = city =>{
        const { setSelectedCity } = this.props
        setSelectedCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleOnSelectedLocation}
                />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

// const mapDispatchToProps = dispatch => ({
//     setSelectedCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities))
// });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
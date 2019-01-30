import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import ForecastItem from './ForecastItem';
import './style.css';

class ForecastExtended extends Component {

    constructor(props) {
        super(props)
        this.state = { forecastData : null}
    }

    componentDidMount() {
        this.getForecastData(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.getForecastData(nextProps.city);
        }
    }

    getForecastData = city => {
        const api_forecast = getUrlForecastByCity(city)
        fetch(api_forecast).then( resolve => {
            return resolve.json();
        }).then(data =>{
            const forecastData = transformForecast(data);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(item => {
            return <ForecastItem key={`${item.weekDay}-${item.hour}`} weekDay={item.weekDay} hour={item.hour} data={item.data}/>
        });
    }

    renderProgress() {
        return <CircularProgress size={50} />
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecast-title'>
                    Pronóstico Extendido para {city}
                </h2>
                { forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress() }
            </div>
        );
    }
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

const cities = [
    "Buenos Aires,ar",
    "Bogota,col",
    "Washington,us",
    "Ciudad de México,mx",
    "Madrid,es",
    "Lima,pe"
];

class App extends Component {
    constructor(props){
        super(props)
        this.state = {city : null}
    }

    handleOnSelectedLocation = city =>{
        this.setState({
            city
        })
    }

    render() {
        const { city } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <Grid>
                    <Row>
                        {/* <Col  xs={12}>
                            <AppBar title='Weather App'/>
                        </Col> */}
                        <AppBar position='sticky'>
                            <Toolbar>
                                <Typography variant='h6' color='inherit'>
                                    Weather App
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList 
                                cities={cities}
                                onSelectedLocation={this.handleOnSelectedLocation}
                                />
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper elevation={4}>
                                <div className="details">
                                    {
                                        city && <ForecastExtended city={city} />
                                    } 
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;

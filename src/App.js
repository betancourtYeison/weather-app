import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
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
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Grid>
                    <Row>
                        <AppBar position='sticky'>
                            <Toolbar>
                                <Typography variant='h6' color='inherit'>
                                    Aplicación del clima
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationListContainer cities={cities} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper elevation={4}>
                                <div className="details">
                                    <ForecastExtendedContainer />
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
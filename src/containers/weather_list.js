import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(tempData=>tempData.main.temp);
        const pressures = cityData.list.map(tempData=>tempData.main.pressure);
        const humidities = cityData.list.map(tempData=>tempData.main.humidity);
        const {lon, lat} = cityData.city.coord; //es 6 to map automatically to a complex object to the two variable
        

        return (
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

WeatherList.propTypes = {
    weather: React.PropTypes.array
};

export default connect(mapStateToProps)(WeatherList);
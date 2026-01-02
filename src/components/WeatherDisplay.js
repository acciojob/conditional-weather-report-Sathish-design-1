import React from 'react';

function WeatherDisplay({ weather }) {
    const { temperature, conditions } = weather;

    // Determine the color based on temperature
    const temperatureStyle = {
        color: temperature > 20 ? 'red' : 'blue',
        fontSize: '24px',
    };

    return (
        <div>
            <p>
                Temperature: <span style={temperatureStyle}>{temperature}°C</span>
            </p>
            <p>Conditions: {conditions}</p>
        </div>
    );
}

export default WeatherDisplay;
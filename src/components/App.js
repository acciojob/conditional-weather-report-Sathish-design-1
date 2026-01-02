import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
    const [weather] = useState({ temperature: 25, conditions: "Sunny" });

    return (
        <div>
            <h1>Weather Display</h1>
            <WeatherDisplay weather={weather} />
        </div>
    );
}

export default App;
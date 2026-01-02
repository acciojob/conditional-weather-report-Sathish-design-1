import React from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const weatherData = {
    temperature: 25,
    condition: "Sunny"
  };

  return (
    <div>
      <WeatherDisplay
        temperature={weatherData.temperature}
        condition={weatherData.condition}
      />
    </div>
  );
}

export default App;
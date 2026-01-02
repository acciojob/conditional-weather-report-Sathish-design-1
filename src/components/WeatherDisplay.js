import React from "react";

function WeatherDisplay({ temperature, condition }) {
  const textStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontSize: "20px"
  };

  return (
    <div>
      <p style={textStyle}>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default WeatherDisplay;
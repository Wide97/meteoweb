import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const WEATHER_ICON_URL = "http://openweathermap.org/img/wn/";

const WeatherCard = ({ city }) => {
  if (!city || !city.weather || !city.weather[0]) {
    return <p className="text-center">No data available</p>;
  }

  const { id, name, main, weather } = city;
  const weatherDescription =
    weather[0]?.description || "No description available";
  const weatherIcon = weather[0]?.icon || "01d";

  return (
    <Card className="weather-card text-center bg-primary text-light">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img
          variant="top"
          src={`${WEATHER_ICON_URL}${weatherIcon}@2x.png`}
          alt={weatherDescription}
        />
        <Card.Text className="text-center">
          Temperature: {main.temp}°C
        </Card.Text>
        <Card.Text className="text-center">
          Weather: {weatherDescription}
        </Card.Text>
        <Card.Text className="text-center">
          Humidity: {main.humidity}%
        </Card.Text>
        <div className="text-center">
          <Link to={`/city/${id}`} className="btn btn-dark">
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import WeatherCard from '../components/weatherCard'

const API_KEY = '846bfed234f30d30edd873d54e959d12';
const defaultCities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin', 'Sydney'];

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [randomCities, setRandomCities] = useState([]);

  useEffect(() => {
    const fetchDefaultCities = async () => {
      try {
        const cityData = await Promise.all(
          defaultCities.map(city =>
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
              .then(response => response.json())
          )
        );
        setRandomCities(cityData);
      } catch (err) {
        console.error('Error fetching default cities:', err);
      }
    };

    fetchDefaultCities();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      const data = await response.json();

      if (data.cod === 200) {
        setCity(data);
        setError(null);
      } else {
        setCity(null);
        setError(data.message || 'City not found');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setCity(null);
      setError('Failed to fetch weather data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center my-4 text-light">Cerca una Città</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCityName">
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </Form.Group>
            <div className="text-center my-5">
              <Button variant="primary" type="submit">Search</Button>
            </div>
          </Form>
        </Col>
      </Row>
      {error && (
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <p className="text-center text-danger">{error}</p>
          </Col>
        </Row>
      )}
      <Row className="justify-content-center mt-4">
        <Col xs={12} lg={12}>
          <h2 className="text-light text-center mb-5">Meteo nel mondo</h2>
          <Row>
            {randomCities.map(city => (
              <Col xs={12} sm={6} md={4} lg={2} key={city.id} className="mb-3">
                <WeatherCard city={city} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {city && !error && (
        <Row className="justify-content-center mt-4">
          <Col xs={12} sm={8} md={6} lg={4}>
            <WeatherCard city={city} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import WeatherCard from '../components/weatherCard';

const API_KEY = '846bfed234f30d30edd873d54e959d12';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [city, setCity] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setCity(data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setCity(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4 text-light">Weather Search</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCityName">
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">Search</Button>
          </Form>
        </Col>
      </Row>
      {city && (
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <WeatherCard city={city} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
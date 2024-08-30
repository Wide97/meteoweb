import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const API_KEY = '846bfed234f30d30edd873d54e959d12';

const CityDetails = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);
  const [nearbyCities, setNearbyCities] = useState([]);

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setCity(data);

        // Fetch nearby cities
        const { lat, lon } = data.coord;
        const nearbyResponse = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}`);
        const nearbyData = await nearbyResponse.json();
        setNearbyCities(nearbyData.list);
      } catch (err) {
        console.error('Error fetching city details:', err);
      }
    };

    fetchCityDetails();
  }, [cityId]);

  return (
    <Container>
      {city && (
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>Temperature: {city.main.temp}°C</Card.Text>
                <Card.Text>Feels Like: {city.main.feels_like}°C</Card.Text>
                <Card.Text>Weather: {city.weather[0].description}</Card.Text>
                <Card.Text>Humidity: {city.main.humidity}%</Card.Text>
                <Card.Text>Pressure: {city.main.pressure} hPa</Card.Text>
                <Card.Text>Wind Speed: {city.wind.speed} m/s</Card.Text>
                <Card.Text>Visibility: {city.visibility / 1000} km</Card.Text>
                <Card.Text>Rain (last hour): {city.rain ? city.rain['1h'] : 0} mm</Card.Text>
                <Card.Text>Cloudiness: {city.clouds.all}%</Card.Text>
                <Card.Text>Sunrise: {new Date(city.sys.sunrise * 1000).toLocaleTimeString()}</Card.Text>
                <Card.Text>Sunset: {new Date(city.sys.sunset * 1000).toLocaleTimeString()}</Card.Text>
              </Card.Body>
            </Card>

            <h3>Nearby Cities</h3>
            <Row>
              {nearbyCities.map(neighbor => (
                <Col xs={12} md={6} lg={4} key={neighbor.id} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>{neighbor.name}</Card.Title>
                      <Card.Text>{neighbor.main.temp}°C</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CityDetails;
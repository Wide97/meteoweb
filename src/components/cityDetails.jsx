import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const API_KEY = '846bfed234f30d30edd873d54e959d12';

const CityDetails = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);
  const [nearbyCities, setNearbyCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setCity(data);

        // Fetch nearby cities
        const { lat, lon } = data.coord;
        const nearbyResponse = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}`);
        if (!nearbyResponse.ok) {
          throw new Error('Nearby cities not found');
        }
        const nearbyData = await nearbyResponse.json();
        setNearbyCities(nearbyData.list);
      } catch (err) {
        console.error('Error fetching city details:', err);
        setError(err.message || 'Failed to fetch data');
      }
    };

    fetchCityDetails();
  }, [cityId]);

  return (
    <Container>
      {error && (
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <p className="text-center text-danger">{error}</p>
          </Col>
        </Row>
      )}
      {city && (
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <Card className=" bg-primary">
              <Card.Body>
                <Card.Title className='text-light text-center'>{city.name}</Card.Title>
                <Card.Text className='text-light'>Temperature: {city.main.temp}°C</Card.Text>
                <Card.Text className='text-light'>Feels Like: {city.main.feels_like}°C</Card.Text>
                <Card.Text className='text-light'>Weather: {city.weather[0].description}</Card.Text>
                <Card.Text className='text-light'>Humidity: {city.main.humidity}%</Card.Text>
                <Card.Text className='text-light'>Pressure: {city.main.pressure} hPa</Card.Text>
                <Card.Text className='text-light'>Wind Speed: {city.wind.speed} m/s</Card.Text>
                <Card.Text className='text-light'>Visibility: {city.visibility / 1000} km</Card.Text>
                <Card.Text className='text-light'>Rain (last hour): {city.rain ? city.rain['1h'] : 0} mm</Card.Text>
                <Card.Text className='text-light'>Cloudiness: {city.clouds.all}%</Card.Text>
                <Card.Text className='text-light'>Sunrise: {new Date(city.sys.sunrise * 1000).toLocaleTimeString()}</Card.Text>
                <Card.Text className='text-light'>Sunset: {new Date(city.sys.sunset * 1000).toLocaleTimeString()}</Card.Text>
              </Card.Body>
            </Card>

            <h3 className='text-light text-center my-4'>Città vicine</h3>
            <Row>
              {nearbyCities.length === 0 ? (
                <Col xs={12} className="text-center">
                  <p>No nearby cities found</p>
                </Col>
              ) : (
                nearbyCities.map(neighbor => (
                  <Col xs={12} md={6} lg={4} key={neighbor.id} className="mb-3">
                    <Card className='bg-primary text-light'>
                      <Card.Body>
                        <Card.Title>{neighbor.name}</Card.Title>
                        <Card.Text>{neighbor.main.temp}°C</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CityDetails;
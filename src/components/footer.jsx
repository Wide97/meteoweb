import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-3">
    <Container>
      <Row>
        <Col className="text-center">
          <p>© 2024 Weather App</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
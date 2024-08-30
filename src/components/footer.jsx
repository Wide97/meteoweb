import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="text-light py-3 mt-4">
    <Container>
      <Row>
        <Col className="text-center">
          <p>© 2024 Il tuo meteo</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="text-light  bg-primary">
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
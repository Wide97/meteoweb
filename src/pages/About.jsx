import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Informazioni su questa App Meteo</Card.Title>
              <Card.Text>
                Questa applicazione fornisce aggiornamenti meteo in tempo reale per le città di tutto il mondo.
                Inserisci semplicemente il nome di una città per ottenere le condizioni meteo attuali, 
                incluse la temperatura, l'umidità e una descrizione dettagliata del tempo.
              </Card.Text>
              <Card.Text>
                <strong>Tecnologie Utilizzate:</strong>
                <ul className="text-start">
                  <li>React: Per costruire l'interfaccia utente.</li>
                  <li>React Router: Per la navigazione tra le diverse pagine.</li>
                  <li>React Bootstrap: Per lo stile e il design responsivo.</li>
                  <li>OpenWeather API: Per ottenere i dati meteo in tempo reale.</li>
                </ul>
              </Card.Text>
              <Card.Text>
                Questa app è stata sviluppata per dimostrare l'integrazione di API con React e fornire un utile strumento per controllare il meteo in modo rapido e semplice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-3">
        <h1>Welcome to React-Bootstrap</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Some text for Card 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Some text for Card 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Some text for Card 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
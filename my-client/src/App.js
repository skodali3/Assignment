import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Navigation/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
  <div>
    <Navigationbar />
    <Container fluid="md">
      <Row>
          <Col xs={3}>
          <img src={require("./img.jpeg")} width="300" height="300" class="d-inline-block align-top" alt="" />
          </Col>
          <Col >
          <p>Sahithya</p>
          <p>"The point of writing about yourself is to grow in self-knowledge and understanding of where you are and where you want to be. With that in mind, it makes sense to write about what you’ve learned so far and how you learned it. It also helps to explore what you’re good at as well as what areas need work." </p>
          </Col>
      </Row>
    </Container>       
  </div>
  );
}

export default App;
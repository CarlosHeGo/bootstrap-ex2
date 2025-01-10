import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

function Ejercicio2() {
  return (
    <Container fluid className="py-4">
      <Row className='p-4'>
        <Col md={5}>
          <div className="bg-primary text-white p-4 rounded h-50 mb-4">
            <h1>EL COMERCIO</h1>
          </div>
          <div className="bg-light p-4 rounded h-50 mb-4">
            <h2>La epidemia de gripe se dispara a la espera del pico de contagios en 15 días</h2>
            <p>La incidencia se situó entre el 31 de diciembre y el 5 de enero en los 62,6 casos por cada 100.000 habitantes, un 48% más que la semana anterior</p>
          </div>
        </Col>
        <Col md={3} className='ms-4'>
          <Row className="mb-4">
            <Card>
              <Card.Body>
                <img src='./1.png' width={130} alt='entrada de urgencias'/>
              </Card.Body>
            </Card>
          </Row>
          <Row className="mb-4 my-4">
            <Card>
              <Card.Body>
                <img src='./2.png' width={130} alt='futbol1'/>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4'>
            <Card>
              <Card.Body>
              <img src='./3.png' width={130} alt='futbol2'/>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4'>
            <Card>
              <Card.Body>
                <img src='./4.png' width={130} alt='futbol1'/>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col md={3} className='ms-3'>
          <Row className="mb-4">
            <Card>
              <Card.Body>
                <h5>Urgencias HUCA</h5>
                <p>Entrada de urgencias</p>
                <p>Ambulancia</p>
              </Card.Body>
            </Card>
          </Row>
          <Row className="mb-4">
            <Card>
              <Card.Body>
                <h5>Entrenador</h5>
                <p>Fubtolistas del Oviedo</p>
                <p>Entrenamiento diario</p>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4'>
            <Card>
              <Card.Body>
                <h5>Entrenador</h5>
                <p>Sporting de Gijón</p>
                <p>Entrenamiento de ayer</p>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4'>
            <Card>
              <Card.Body>
                <h5>Mariano Antolín</h5>
                <p>Escritor</p>
                <p>Premio nacional de 2014 de literatura</p>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Ejercicio2;
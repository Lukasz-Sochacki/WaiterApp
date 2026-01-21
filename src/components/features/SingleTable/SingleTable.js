import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTable = ({ status, id }) => {
  return (
    <Container className='mt-2'>
      <Card className='mt-1'>
        <Card.Body>
          <Row className='align-items-end mb-3'>
            <Col className='col-2'>
              <h2 className='mb-0'>Table {id}</h2>
            </Col>
            <Col className='col-4'>
              <strong>Status:</strong> {status}
            </Col>
            <Col className='col-6 d-flex justify-content-end'>
              <Link to={'/table/edit' + id} className='btn btn-primary'>
                Show more
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleTable;

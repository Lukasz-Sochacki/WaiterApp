import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const tables = useSelector(getAllTables);

  if (tables.length === 0)
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <Spinner />
      </div>
    );

  return (
    <>
      <Container>
        <Col className='d-flex'>
          <h1 className='mb-5'>All tables:</h1>
        </Col>
        <Row>
          {tables.map((table) => (
            <Card className='mt-1' key={table.id}>
              <Card.Body>
                <Row className='align-items-center mb-3'>
                  <Col className='col-2'>
                    <h2 className='mb-0'>Table {table.id}</h2>
                  </Col>
                  <Col className='col-4'>
                    <strong>Status: </strong>
                    {table.status}
                  </Col>
                  <Col className='col-6 d-flex justify-content-end'>
                    <Link
                      to={`table/edit/${table.id}`}
                      className='btn btn-primary'
                    >
                      Show more
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;

import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { Spinner, Container } from 'react-bootstrap';
import SingleTable from '../../features/SingleTable/SingleTable';

const Home = () => {
  const tables = useSelector(getAllTables);
  console.log(tables.length);
  if (tables.length === 0) return <Spinner />;

  return (
    <Container>
      <h1 className='mt-2'>All tables:</h1>
      {tables.map((table) => (
        <SingleTable key={table.id} id={table.id} status={table.status} />
      ))}
    </Container>
  );
};

export default Home;

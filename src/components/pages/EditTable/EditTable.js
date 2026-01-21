import EditTableForm from '../../features/EditTableForm/EditTableForm';
import { Container } from 'react-bootstrap';

const EditTable = () => {
  return (
    <div>
      <h1>EditTable</h1>
      <Container className='w-75'>
        <EditTableForm />
      </Container>
    </div>
  );
};

export default EditTable;

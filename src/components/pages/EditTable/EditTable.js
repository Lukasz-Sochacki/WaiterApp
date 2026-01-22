import EditTableForm from '../../features/EditTableForm/EditTableForm';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';

const EditTable = () => {
  // const { id } = useParams();
  // const tableData = useSelector((state) => getTableById(state, id));

  return (
    <div>
      {/* <h1>Table no. {tableData.id}</h1> */}
      <Container>
        <EditTableForm />
      </Container>
    </div>
  );
};

export default EditTable;

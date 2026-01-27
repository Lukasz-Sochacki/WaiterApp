import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TableForm from '../TableForm/TableForm';
import { addTableRequest } from '../../../redux/tablesRedux';

const AddTableForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <TableForm
        action={(table) => {
          dispatch(addTableRequest(table));
          navigate('/');
        }}
        actionText='Add table'
      />
    </>
  );
};

export default AddTableForm;

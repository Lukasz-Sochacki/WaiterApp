import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableForm from '../TableForm/TableForm';
import { getTableById } from '../../../redux/tablesRedux';
import { editTables } from '../../../redux/tablesRedux';
import PropTypes from 'prop-types';

const EditTableForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, id));

  const handleSubmit = (table) => {
    dispatch(editTables({ ...table, id }));
    navigate('/');
  };
  if (!tableData) return <Navigate to='/' />;

  return (
    <TableForm
      id={tableData.id}
      action={handleSubmit}
      actionText='Update'
      peopleAmount={tableData.peopleAmount}
      maxPeopleAmount={tableData.maxPeopleAmount}
      status={tableData.status}
      bill={tableData.bill}
    />
  );
};

EditTableForm.propTypes = {
  peopleAmount: PropTypes.number.isRequired,
  maxPeopleAmount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  bill: PropTypes.number.isRequired,
};

export default EditTableForm;

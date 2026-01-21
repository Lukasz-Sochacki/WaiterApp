import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableForm from '../TableForm/TableForm';
import { getTableById } from '../../../redux/tablesRedux';
import { editTables } from '../../../redux/tablesRedux';

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
      actionText='Update table'
      peopleAmount={tableData.peopleAmount}
      maxPeopleAmount={tableData.maxPeopleAmount}
      status={tableData.status}
      bill={tableData.bill}
    />
  );
};

export default EditTableForm;

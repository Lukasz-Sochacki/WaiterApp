import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import ReactQuill from 'react-quill-new';
// import 'react-quill-new/dist/quill.snow.css';
// import { useForm } from 'react-hook-form';

const TableForm = ({ action, actionText, ...props }) => {
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || '',
  );
  const [status, setStatus] = useState(props.status || '');
  const [bill, setBill] = useState(props.bill || '');
  const [statusError, setStatusError] = useState(false);

  return <div>123</div>;
};

export default TableForm;

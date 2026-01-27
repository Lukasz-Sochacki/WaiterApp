import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllTableStatus } from '../../../redux/tablesStatusRedux';
import { useForm } from 'react-hook-form';
import { editTablesRequest } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const TableForm = ({ action, actionText, ...props }) => {
  const statusData = useSelector(getAllTableStatus);

  const [peopleAmount, setPeopleAmount] = useState(
    ['Cleaning', 'Free'].includes(props.status) ? 0 : props.peopleAmount,
  );
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || '',
  );
  const [status, setStatus] = useState(props.status || '');
  const [bill, setBill] = useState(props.bill || '');
  const [statusError, setStatusError] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (['Cleaning', 'Free'].includes(status)) {
      setPeopleAmount(0);
    }
  }, [status]);

  const handleSubmit = () => {
    setStatusError(!status);
    action({
      id,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
    dispatch(
      editTablesRequest({ id, status, peopleAmount, maxPeopleAmount, bill }),
    );
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  if (peopleAmount > maxPeopleAmount) {
    setPeopleAmount(maxPeopleAmount);
  }

  if (maxPeopleAmount > 10) {
    setMaxPeopleAmount('10');
  }

  return (
    <>
      <h1>Table no. {id}</h1>
      <Container className='row mt-5 mb-5'>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className='col-6' as={Row} controlId='formBasicStatus'>
            <Row>
              <Form.Label column sm='2'>
                <strong>Status: </strong>
              </Form.Label>
              <Col sm='8'>
                <Form.Select
                  {...register('status', { required: true })}
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option>{''}</option>
                  {statusData.map((status, id) => (
                    <option key={id} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Select>
                {statusError && (
                  <small className='d-block form-text text-danger mt-2'>
                    You must select at least one status
                  </small>
                )}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group
            as={Row}
            className='mb-3 mt-3'
            controlId='formBasicPeople'
          >
            <Row>
              <Form.Label column sm='1'>
                <strong>People: </strong>
              </Form.Label>
              <Col sm='2'>
                <Form.Control
                  {...register('people', { required: true })}
                  value={peopleAmount}
                  onChange={(event) => setPeopleAmount(event.target.value)}
                  type='number'
                  min='0'
                  max='10'
                />
                {errors.people && (
                  <small className='d-block form-text text-danger mt-2'>
                    Required value
                  </small>
                )}
              </Col>
              /
              <Col sm='2'>
                <Form.Control
                  {...register('peopleMax', { required: true })}
                  value={maxPeopleAmount}
                  onChange={(event) => setMaxPeopleAmount(event.target.value)}
                  type='number'
                  min='0'
                  max='10'
                />
                {errors.peopleMax && (
                  <small className='d-block form-text text-danger mt-2'>
                    Required value
                  </small>
                )}
              </Col>
            </Row>
          </Form.Group>
          {status === 'Busy' ? (
            <Form.Group
              as={Row}
              className='mb-3 mt-3'
              controlId='formBasicBill'
            >
              <Row>
                <Form.Label column sm='1'>
                  <strong>Bill: </strong>
                </Form.Label>
                <Form.Label column sm='1' className='text-end'>
                  <strong>$ </strong>
                </Form.Label>
                <Col sm='2'>
                  <Form.Control
                    {...register('bill', {
                      required: true,
                      minLength: 1,
                      value: 0,
                    })}
                    value={status === 'Busy' ? bill : 0}
                    onChange={(event) => setBill(event.target.value)}
                    type='number'
                    min='0'
                  />
                  {errors.bill && (
                    <small className='d-block form-text text-danger mt-2'>
                      Bill must be greater than 0
                    </small>
                  )}
                </Col>
              </Row>
            </Form.Group>
          ) : (
            ''
          )}
          <Button type='submit' variant='primary'>
            {actionText}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TableForm;

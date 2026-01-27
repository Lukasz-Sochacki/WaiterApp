import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        data-bs-theme='dark'
        className='mt-4 mb-4 rounded'
      >
        <Container>
          <Navbar.Brand className='text-light' href='/'>
            Waiter.app
          </Navbar.Brand>
          <Nav className='d-inline-flex'>
            <Link className='text-light px-3 text-decoration-none' to='/'>
              Home
            </Link>
            <Link
              className='text-light px-3 text-decoration-none'
              to='/table/add'
            >
              Add table
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

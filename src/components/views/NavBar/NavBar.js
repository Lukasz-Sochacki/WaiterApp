import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

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
            <Nav.Link className='text-light px-3' as={NavLink} to='/'>
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

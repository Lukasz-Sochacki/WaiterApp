import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';
import EditTable from './components/pages/EditTable/EditTable';
import { fetchTableStatus } from './redux/tablesStatusRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchTableStatus()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/edit/:id' element={<EditTable />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;

import AllBooks from './Component/AllBooks';
import AddBook from './Component/AddBook';
import EditBook from './Component/EditBook';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="all" element={<AllBooks /> } />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

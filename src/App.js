import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='/delete/:id' element={<Delete />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

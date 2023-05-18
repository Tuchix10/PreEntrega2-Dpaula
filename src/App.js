import './scss/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Navbar from './components/Navbar/navbar';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

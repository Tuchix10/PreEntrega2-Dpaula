import './scss/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/contact';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Navbar from './components/Navbar/navbar';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

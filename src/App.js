import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import NavsAndHeader from './containers/NavsAndHeader';
import About from './containers/About';
import Footer from './containers/Footer';
import AddProducts from './containers/AddProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavsAndHeader></NavsAndHeader>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/home" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path='*' element=''></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import About from './containers/About';
import AddProducts from './containers/AddProducts';
import Dashboard from './containers/Dashboard/Dashboard';
import Review from './containers/Dashboard/Review/Review';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/home" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path='*' element=''></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
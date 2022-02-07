import './App.css';
import Header from './containers/header';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import ProductList from './containers/productList';
import ProductDetail from './containers/productDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path = "/" exact element={<ProductList/>}/>
        {/* <Route path = "/" exact >
          <ProductList/>
        </Route> */}
        <Route path = "/product/:productId" element={<ProductDetail/>}/>
        <Route>404 NOT FOUND</Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;

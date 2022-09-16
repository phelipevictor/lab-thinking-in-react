import './App.css';
import ProductsPage from './components/ProductsPage';
import data from './data';

const products = data.data;

function App() {
  return (
    <div className="App">
      <ProductsTable products={products} />
    </div>
  );
}

export default App;
import ProductItem from "../../components/productItem/ProductItem";
import Container from '../../components/container/Container';
import { Link } from 'react-router-dom';

function Store() {
  return (
    <div className="text-right mt-5">
     
      <h1>جدیدترین محصولات</h1>

      <Container>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Link to={`/product/${1}`}>
          <ProductItem />
          </Link>
          
          <Link to={`/product/${2}`}>
          <ProductItem />
          </Link>

          <Link to={`/product/${3}`}>
          <ProductItem />
          </Link>

          <Link to={`/product/${4}`}>
          <ProductItem />
          </Link>

          <Link to={`/product/${5}`}>
          <ProductItem />
          </Link>
         
        </div>
        
      </Container>
      
    </div>
  );
}

export default Store;

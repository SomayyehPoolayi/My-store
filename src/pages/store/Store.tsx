import ProductItem from "../../components/productItem/ProductItem";
import Container from '../../components/container/Container';

function Store() {
  return (
    <div className="text-right mt-5">
     
      <h1>جدیدترین محصولات</h1>

      <Container>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        
      </Container>
      
    </div>
  );
}

export default Store;

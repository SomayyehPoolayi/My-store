import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Products } from "../../types/servers";

function Store() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div className="text-right mt-5">
      <h1>جدیدترین محصولات</h1>

      <Container>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link to={`/product/${item.id}`}>
              <ProductItem {...item}/>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;

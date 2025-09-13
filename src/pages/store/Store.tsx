import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/servers";

function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);

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
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item}/>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;

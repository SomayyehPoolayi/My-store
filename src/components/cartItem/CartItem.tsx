import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
// import type { IProduct } from "../../types/servers";
// import Product from "../../pages/product/Product";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import type { IProduct } from "../../types/servers";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      
      <Link to={`/product/${id}`}>
        <img src={product?.image} alt="" className="rounded w-28 " />
      </Link>

      <div className="mr-4">
        <h3 className="text-right">{product?.title} </h3>
        <div className="mt-2">
          <Button
            onClick={() => handleRemoveProduct(id)}
            variant="danger"
            className="mr-2"
          >
            Remove
          </Button>
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span className="mx-2">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

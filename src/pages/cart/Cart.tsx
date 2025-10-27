import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div>
          <div>
            {cartItems.map((item) => (
              <CartItem {...item} />
            ))}
          </div>
          <div className="bg-gray-200 rounded p-6">
            <p className="text-right">قیمت کل: 600</p>
            <p className="text-right">تخفیف:</p>
            <p className="text-right">قیمت نهایی:</p>
          </div>
        </div>
        <Button variant="success" className="mt-2">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
}

export default Cart;

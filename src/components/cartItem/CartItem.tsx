import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img src="" alt="" className="rounded w-28 " />

      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>
        <div className="mt-2">
          <Button variant="danger" className="mr-2">
            Remove
          </Button>
          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

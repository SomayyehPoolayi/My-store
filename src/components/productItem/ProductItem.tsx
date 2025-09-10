import type { Products } from "../../types/servers";

type TProductItem = Products;

function ProductItem({image, title, price, description }: TProductItem) {
  return (
    <div>
      <div className="shadow border rounded pb-4">
        <img src={image}  className=" rounded-t " />
        
        <div className="flex justify-between mt-2 p-4">
          <span className="font-bold">{price} $</span>
          <h3 className="line-clamp-1 font-bold w-52">{title} </h3>
        </div>

        <div className="mt-4 px-4">
          <p className="line-clamp-2 text-left text-gray-500">{description} </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

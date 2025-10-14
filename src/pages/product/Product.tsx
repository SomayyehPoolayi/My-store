import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();

  const [productData, setProductData] = useState<IProduct>();

  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProductData(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 ">
            <h1 className="text-right">{productData?.title} </h1>
            <div className="p-4">
              <p className="text-right">{productData?.price}</p>
              <p className="text-right">{productData?.description}</p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-sky-200">
            <img src={productData?.image} alt="" className="rounded" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                className="mt-2 w-full "
                variant="primary"
              >
                اضافه کردن محصول به سبد
              </Button>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full"
                    variant="primary"
                  >
                    +
                  </Button>

                  <span className="flex justify-center items-center">
                    {getProductQty(parseInt(params.id as string))}
                  </span>

                  <Button
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full"
                    variant="primary"
                  >
                    -
                  </Button>
                </div>

                <Button
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                  className="mt-2 w-full "
                  variant="danger"
                >
                  حذف کامل محصول
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

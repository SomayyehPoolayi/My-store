import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { data, useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/servers";

function Product() {
  const params = useParams<{ id: string }>();

 const [productData, setProductData] = useState<IProduct>();

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

            <Button className="mt-2 w-full !py-3" variant="primary">
              add to car
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

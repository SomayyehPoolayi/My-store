import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Product() {
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 ">
            <h1 className="text-right">عنوان محصول</h1>
            <div className="p-4">
              <p className="text-right">قیمت 25$</p>
              <p className="text-right">kuygfkuyfgjuyfjuy</p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-sky-200">
            <img src="" alt="" className="rounded" />

            <Button className="mt-2 w-full !py-3" variant="primary">add to car</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

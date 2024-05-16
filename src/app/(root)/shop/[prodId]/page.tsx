import React from "react";
import ProductView from "../../../components/products/product-view";

const page = ({ params }) => {
  console.log(params.prodId)
  return (
    <div>
      <ProductView prodId={params.prodId} />
    </div>
  );
};

export default page;

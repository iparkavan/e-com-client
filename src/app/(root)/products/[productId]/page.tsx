import React from "react";
import ProductView from "../../../../components/products/product-view";

const page = ({ params }) => {
  return (
    <div>
      <ProductView prodId={params.productId} />
    </div>
  );
};

export default page;

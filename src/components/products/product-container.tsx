// "use client";

import AddProductModal from "./add-product-modal";
import { useGetProducts } from "../../hooks/product-hooks";
import ProductCard from "./product-card";
import { productTypes } from "./product-types";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";

const ProductContainer = () => {
  const { token } = useAppSelector((state) => state.user);

  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);

  const { data: userProducts, isLoading } = useGetProducts(token);

  const closeModelHanlder = () => {
    setIsProductModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* <div className="w-[100%] bg-white rounded-md p-4"> */}
      <div className="flex fixed right-0 bottom-0 p-6 items-center justify-end z-20">
        <button
          className="theme-gradient text-white px-6 py-4 rounded-full drop-shadow-md active:drop-shadow-xl active:ring-2 ring-blue-500 ring-offset-1"
          onClick={() => setIsProductModalOpen(true)}
        >
          +
        </button>
      </div>
      {isProductModalOpen && (
        <AddProductModal onClose={closeModelHanlder} type="Add" />
      )}
      {/* </div> */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {userProducts &&
          userProducts.map((product: productTypes) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageUrl={product.imageUrl}
              title={product.productTitle}
              price={product.price}
              description={product.description}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductContainer;

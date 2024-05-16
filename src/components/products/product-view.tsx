"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDeleteProduct, useGetProductById } from "../../hooks/product-hooks";
import Image from "next/image";
import Button from "../UI/Button";
import { useAddToCart } from "../../hooks/cart-hook";
import AddProductModal from "./add-product-modal";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/navigation";
import ImageSlider from "../UI/ImageSlider";
import { useAppSelector } from "../../store/hooks";

interface productViewProps {
  prodId: string;
}

const ProductView: React.FC<productViewProps> = ({ prodId }) => {
  const router = useRouter();

  const token = useAppSelector((state) => state.user.token);

  const { data: product } = useGetProductById(prodId);
  const { mutate } = useAddToCart();
  const { mutate: deleteMuate, isPending: isDeletePending } =
    useDeleteProduct(token);
  const [isShownProductModal, setIsShownProductModal] = useState(false);

  const addToCart = () => {
    mutate({ prodId: prodId });
  };

  const editProductHandler = () => {
    setIsShownProductModal(true);
  };

  const deleteProductHandler = () => {
    deleteMuate(
      { prodId: prodId },
      {
        onSuccess: () => {
          router.push("/products");
        },
      }
    );
  };

  return (
    <div className="w-full">
      <div className="max-w-[60%] flex flex-col gap-2">
        {/* {product?.productDetails?.imageUrl &&
            product.productDetails?.imageUrl.map(
              (image: { url: string | StaticImport }, i: number) => (
                <Image
                  fill
                  src={image.url}
                  alt={`#product-image - ${i + 1}`}
                  className="object-cover rounded-md"
                />
              )
            )} */}
        <div>
          <ImageSlider imageUrl={product?.productDetails?.imageUrl} />
        </div>
        <div>{product?.productDetails?.productTitle}</div>
        <div>{product?.productDetails?.price}</div>
        <div>{product?.productDetails?.description}</div>
        <div className="flex items-center justify-end gap-3">
          <Button color="red-500" onClick={deleteProductHandler}>
            {isDeletePending ? "Deleting..." : "Delete"}
          </Button>
          <Button onClick={() => editProductHandler()}>Edit</Button>
          {isShownProductModal && (
            <AddProductModal
              onClose={() => setIsShownProductModal(false)}
              productData={product}
              type="Edit"
            />
          )}
          <Button onClick={addToCart}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

"use client";

import React, { useState } from "react";
import { useGetShopProducts } from "../../hooks/shop-hook";
import ProductCard from "../products/product-card";
import { useAppSelector } from "../../store/hooks";
import { productTypes } from "../products/product-types";
import { serialize } from "v8";

const shop = () => {
  const { data: productsData = [], isLoading } = useGetShopProducts();
  const filteredData = useAppSelector(
    (state) => state.commonInput.filtererData
  );
  const searchQuery = useAppSelector((state) => state.commonInput.searchIput);


  if (isLoading) {
    return <div>Buffering....</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {searchQuery.length > 1
        ? filteredData?.map((product: any) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageUrl={product.imageUrl}
              title={product.productTitle}
              price={product.price}
              description={product.description}
              isLoading={isLoading}
            />
          ))
        : productsData?.map((product: any) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageUrl={product.imageUrl}
              title={product.productTitle}
              price={product.price}
              description={product.description}
              isLoading={isLoading}
            />
          ))}
    </div>
  );
};

export default shop;

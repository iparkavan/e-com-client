import React, { ChangeEvent, useState } from "react";
import { useGetCart } from "../../hooks/cart-hook";

const CartModal = () => {
  // const { data: cartData } = useGetCart();
  // console.log("CART DATA", cartData);
  const { data } = useGetCart();
  console.log(data);

  return (
    <div className="min-w-[25%] h-[500px] bg-white absolute right-16 mt-5 rounded-md border-t-4 border-t-blue-500 drop-shadow-xl">
      CartModal
    </div>
  );
};

export default CartModal;

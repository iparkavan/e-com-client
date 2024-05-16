"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import CartModal from "../cart/cart-modal";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetShopProducts } from "../../hooks/shop-hook";
import {
  setFilterdData,
  setSearchInput,
} from "../../store/features/inputSlice";
import { productTypes } from "../products/product-types";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState("0px");
  const closeSearchRef = useRef<HTMLLabelElement>();
  const [isLoading, setIsLoading] = useState(false);

  const { data: productsData = [] } = useGetShopProducts();

  const isCartShownHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const searchClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value));
    const searchQuery = e.target.value;

    if (searchQuery.length > 1) {
      const filteredData =
        productsData &&
        productsData.length &&
        productsData.filter((product: productTypes) =>
          product.productTitle.toLowerCase().includes(searchQuery)
        );
      dispatch(setFilterdData(filteredData));
    } else {
      dispatch(setFilterdData([]));
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: { target: any }) => {
      if (
        closeSearchRef.current &&
        !closeSearchRef.current.contains(event.target)
      ) {
        setWidth("0px");
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const logoutHandler = () => {
    try {
      setIsLoading(true);
      Cookies.remove("token");
      Cookies.remove("userId");

      router.push("/login");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center m-4 justify-between">
      <div className="flex items-center gap-3 justify-center">
        <div className="bg-black w-12 h-12 rounded-full" />
        {/* <h2 className="sm:text-2xl text-xl sm:font-semibold">Shopping Cart</h2> */}
        <h2 className="blueGradient text-3xl">Shopping Cart</h2>
        <div>
          <IoMdMenu className="md:w-8 md:h-8 w-6 h-6" />
        </div>
      </div>
      {/* <div className="flex items-center justify-center gap-3 p-1 bg-white/80 backdrop-blur-md outline-blue-600 rounded-xl">
        <CiSearch className="w-6 h-6" />
        <input
          className="outline-none"
          onChange={searchClickHandler}
          type="text"
          placeholder="Search"
        />
      </div> */}
      <div className="md:block hidden">
        <div className="flex items-center justify-between gap-3">
          <label
            className={`flex items-center justify-center p-2 bg-white/80 backdrop-blur-md rounded-full cursor-pointer`}
            onClick={() => setWidth("250px")}
            ref={closeSearchRef}
            htmlFor="search-input"
          >
            <input
              className={`outline-none`}
              style={{
                width: width,
                transition: "all",
                transitionDuration: ".2s",
              }}
              id="search-input"
              onChange={searchClickHandler}
              type="text"
              placeholder="Search"
            />
            <CiSearch className="w-6 h-6" />
          </label>
          <div>
            <BsPerson className="w-6 h-6" />
          </div>
          <div
            onClick={isCartShownHandler}
            className="cursor-pointer"
            // onMouseOut={isCartShownHandler}
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => {
              setIsCartOpen(false);
            }}
            // onMouseOver={isCartShownHandler}
          >
            <CiShoppingCart className="w-6 h-6" />
            {isCartOpen && (
              <div
                // onMouseEnter={isCartShownHandler}
                // onMouseEnter={isCartShownHandler}
                onMouseEnter={() => setIsCartOpen(true)}
                onMouseLeave={() => setIsCartOpen(false)}
              >
                <CartModal />
              </div>
            )}
          </div>
          <button
            className="px-4 py-2 bg-red-500 rounded-xl text-white transition-all duration-300"
            onClick={logoutHandler}
          >
            {isLoading ? "Logging Out..." : "LogOut"}
          </button>
        </div>
      </div>
      <div className="md:hidden sm:block">cl</div>
    </div>
  );
};

export default Navbar;

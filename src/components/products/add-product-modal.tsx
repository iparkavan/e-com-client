"use client";

import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import { useAddProduct, useUpdateProduct } from "../../hooks/product-hooks";
import Button from "../UI/Button";
import Dropzone from "../UI/dropzone";
import uploadToCloudinary from "../../helper/constants/uploadToCloudinary";
import Image from "next/image";
import { DeleteRoundedIcon } from "../UI/icons";
import { productEnum, productTypes } from "./product-types";
import { useAppSelector } from "../../store/hooks";
import { stat } from "fs";

interface productModalProps {
  onClose: () => void;
  productData?: productTypes;
  type: string;
}

const AddProductModal = ({ onClose, productData, type }: productModalProps) => {
  const [grapPhoto, setGrapPhoto] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const token = useAppSelector((state) => state.user.token);

  const [title, setTitle] = useState<string>(
    "" || productData?.productDetails.productTitle
  );
  const [description, setDescription] = useState<string>(
    "" || productData?.productDetails.description
  );
  const [price, setPrice] = useState<string>(
    "" || productData?.productDetails.price
  );
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: addProductMutate, isError: productError } =
    useAddProduct(token);
  const { mutate: updateProduct } = useUpdateProduct(token);

  useEffect(() => {
    if (grapPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrapPhoto(false);
        }, 1000);
      };
    }
  }, [grapPhoto]);

  const removeImageHandler = (fileName: any) => {
    const filesAfterDeleted = selectedImages?.filter(
      (image: { name: any }) => image.name !== fileName
    );
    setSelectedImages(filesAfterDeleted);
  };

  // const editImageHandler = (id) => {
  //   const filesAfterDeleted = productData?.productDetails.imageUrl.filter(
  //     (image: { id: string }) => image.id !== id
  //   );
  // };

  const submitProductHandler = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const Images = await uploadToCloudinary("image", selectedImages);

    if (type === "Add") {
      addProductMutate({
        productTitle: title,
        description,
        price,
        imageUrl: Images,
        productDetails: undefined,
        _id: undefined,
      });
    } else if (type === "Edit") {
      updateProduct({
        prodId: productData?.productDetails._id,
        productTitle: title,
        description,
        price,
        imageUrl: Images,
        productDetails: undefined,
        _id: undefined,
      });
    }

    setIsLoading(false);

    onClose();
  };

  return (
    <Modal heading="Add Product" onClose={onClose}>
      <form className="w-full flex flex-col" onSubmit={submitProductHandler}>
        <div className="p-5 w-full flex flex-col xl:flex-row sm:items-start items-center xl:items-center xl:justify-start justify-start gap-10">
          <div>
            <Dropzone setFile={setSelectedImages} />
            <div className="w-full mt-4">
              <ul className="grid grid-cols-4 space-x-2 space-y-2 gap-3 items-center justify-center text-center">
                {
                  // type === "Add" &&
                  selectedImages?.map((image: any, i: number) => (
                    <li
                      className="relative object-cover justify-center items-center border-2"
                      key={i}
                    >
                      <button
                        type="button"
                        className="absolute right-[-10px] top-[-10px] text-2xl text-red-500 cursor-pointer"
                        onClick={() => removeImageHandler(image.name)}
                      >
                        <DeleteRoundedIcon />
                      </button>
                      <Image
                        src={image.preview}
                        alt={`#${i + 1}`}
                        width={100}
                        height={100}
                      />
                    </li>
                  ))
                }
                {type === "Edit" &&
                  productData?.productDetails.imageUrl.map(
                    (image: any, i: number) => (
                      <li className="relative object-cover justify-center items-center border-2">
                        <button
                          type="button"
                          className="absolute right-[-10px] top-[-10px] text-2xl text-red-500 cursor-pointer"
                          onClick={() => removeImageHandler(image.publicId)}
                        >
                          <DeleteRoundedIcon />
                        </button>
                        <Image
                          src={image.url}
                          alt={`#${i + 1}`}
                          width={100}
                          height={100}
                        />
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>

          <div className="grid items-start justify-center gap-3">
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="productName">Product Name</label>
              <input
                name="title"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="productName">Description</label>
              <input
                name="description"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="productName">Price</label>
              <input
                name="price"
                className="border-2 rounded-lg p-1 focus:outline-none focus:border-blue-500 "
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit">{isLoading ? "Saving..." : "Save"}</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;

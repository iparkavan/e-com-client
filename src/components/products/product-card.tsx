import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface productCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: {
    publicId: string;
    url: string;
  }[];
  isLoading?: boolean;
  productId: string;
}

const ProductCard: React.FC<productCardProps> = ({
  title,
  price,
  description,
  imageUrl,
  productId,
}) => {
  // const [groupHover, setgroupHover] = useState(false);
  const router = useRouter();

  const reducedString = (desc: string) => {
    // let split = name.split(".");
    // let filename = split[0];
    // let extention = split[1];
    // console.log(desc);

    if (desc.length > 45) {
      const description = desc.substring(0, 45);
      return `${description}...`;
    } else {
      return desc;
    }
  };

  return (
    <div
      className="bg-white max-w-[250px] h-[350px] min-w-[200px] rounded-md overflow-hidden drop-shadow-lg"
      // onMouseEnter={() => setgroupHover(true)}
      // onMouseLeave={() => setgroupHover(false)}
      onClick={() => router.push(`/products/${productId}`)}
    >
      <div>
        {imageUrl && (
          <>
            {imageUrl.map((image) => (
              <div className="relative h-[350px]" key={image.publicId}>
                <Image
                  src={image?.url}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </>
        )}
        {/* <div className="relative h-[175px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-tl-md rounded-tr-md object-cover"
        /> */}
        <div className="absolute bottom-0 bg-white p-2 w-full h-28 flex flex-col rounded-tr-md rounded-tl-md shadow-2xl shadow-black transition-all duration-300">
          <h1 className="font-bold blueGradient text-lg">{title}</h1>
          <span className="text-xl font-semibold text-black">${price}</span>
          <p className="text-slate-600">{reducedString(description)}</p>
        </div>
        {/* {groupHover ? (
          <div className="absolute bottom-0 bg-white/90 pl-4 w-full h-28 flex flex-col rounded-tr-md rounded-tl-md shadow-2xl shadow-black transition-all duration-300">
            <h1 className="font-bold blueGradient text-xl mt-2">{title}</h1>
            <span className="text-xl font-semibold text-black">${price}</span>
            <p className="text-slate-600">{description}</p>
          </div>
        ) : (
          <div className="absolute bottom-0 w-full pl-4 bg-white h-0 transition-all duration-300">
            <h1 className="font-bold blueGradient text-xl mt-2">{title}</h1>
            <span className="text-xl font-semibold">${price}</span>
            <p className="text-slate-500">{description}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;

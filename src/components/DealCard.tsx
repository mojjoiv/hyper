import Image from "next/image";
import React from "react";
import Place from '../app/Place.jpg';

import { AiFillStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
  // discountRate: number;
  prefaceIconUrl: string;
}

const DealCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  // discountRate,
  prefaceIconUrl
}) => {
  const formattedPrice = price.toFixed(2); 

  return (
    <div style={{ padding: "8px", gap: "2px", borderRadius: "8px", maxWidth: "400px", marginTop: "4px" }}>
      <div>
        {img ? (
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            src={img}
            width={30}
            height={30}
            alt={title}
            layout="responsive"
          />
        ) : (
          <Image
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            src={Place}
            alt="Default Image"
          />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px" }}>
        <h2 style={{ color: "black", fontWeight: "medium", textTransform: "uppercase" }}>{title}</h2>
        <p style={{ color: "gray", maxWidth: "150px" }}>{desc}</p>
        <div className="flex items-center gap-2 text-gray-500 text-[20px]">
          <AiFillStar />
          {rating}
        </div>
        <div style={{ display: "flex", gap: "4px", fontWeight: "bold" }}>
          {price}원
          <del style={{ color: "gray", fontWeight: "normal" }}>
            {formattedPrice}원
          </del>
          <br />
          {prefaceIconUrl && <Image src={prefaceIconUrl} alt="Preface Icon" style={{ width: "8px", height: "8px" }} />}
        </div>
      </div>
    </div>
  );
};

export default DealCard;

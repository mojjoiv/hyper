"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CollectionData {
  title: string;
  items: Array<{
    title: string;
    rating: number;
    media: Array<{ uri: string }>;
    priceInfo: {
      price: number;
      discountPrice: number;
      discountRate: number;
      applyCoupon: boolean;
    };
  }>;
}

const SingleCard: React.FC<{ collectionData: CollectionData }> = ({ collectionData }) => {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
        const data = await response.json();

        // Check if the response contains data and items
        if (data && data.length > 0 && data[0].items && data[0].items.length > 0) {
          // Extract the first item from the first collection
          const desiredItem = data[0].items[0];

          // Now you have the desired item, you can set it to the state
          setApiData(desiredItem);
        } else {
          console.error('Invalid or empty response from the API.');
        }
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      }
    };

    // Call the function to fetch data
    fetchCollectionData();
  }, []); // Empty dependency array to run only once

  // Check if collectionData is provided
  if (!collectionData || !apiData) {
    return null;
  }

  // Extract relevant data
  const { title, items } = collectionData;
  const item = apiData; // Using data from the API

  // Check if the item is available
  if (!item) {
    return null;
  }

  // Extract item details
  const { title: itemTitle, rating, media, priceInfo } = item;

  // Extract media URI
  const mediaUri = media && media.length > 0 ? media[0].uri : '';

  // Check if mediaUri is a valid URL
  if (!mediaUri) {
    return null; // or provide a placeholder image
  }

  // Extract price details
  const { price, discountPrice, discountRate, applyCoupon } = priceInfo || {};

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

        <div className="flex items-center">
  
        </div>
      </div>
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <Image
          src={mediaUri}
          alt={itemTitle}
          className="w-full h-full rounded-t lg:rounded-t-none lg:rounded-l object-cover object-right md:object-left-bottom"
          layout="fill"
        />
      </div>
      <div className="mt-4 p-4 bg-gray-200">
        <p className="text-gray-900 font-bold text-xl mb-2">{itemTitle}</p>
        <p className="text-gray-700 text-base">Rating: {rating}</p>
        <p className="text-gray-700 text-base">Price: ${price}</p>
        <p className="text-gray-700 text-base">Discount Price: ${discountPrice}</p>
        <p className="text-gray-700 text-base">Discount Rate: {discountRate}%</p>
        {applyCoupon && <p className="text-green-500 font-bold">Coupon Available</p>}
      </div>
    </div>
  );
};

export default SingleCard;

import React, { useState, useEffect } from 'react';
import HotDeal from "./HotDeal"
import Price from './Price'


interface Media {
  uri: string;
  // Add other properties if available
}

interface DealData {
  media?: Media[];
  description?: string;
  title?: string;
  // Add other properties if available
}

const SingleCard = () => {
  const [dealData, setDealData] = useState<DealData | null>(null);

  useEffect(() => {
    const fetchDealData = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setDealData(data.items[0]); // Assuming you want the first item
        }
      } catch (error) {
        console.error('Error fetching deal data:', error);
      }
    };

    fetchDealData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add more settings as needed: https://react-slick.neostack.com/docs/api/
  };

  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className=" rounded-2xl grid place-items-center mb-8 p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <h2 className="text-gray-500 font-black text-[20px]">HOT DEAL</h2>
              <p>Happy Hour</p>
            </div>
          </div>
          <HotDeal/>
        </div>
      </div>
      <br/>
      {/* <div className="container">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className=" rounded-2xl grid place-items-center mb-8 p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <h2 className="text-gray-500 font-black text-[20px]">판매량 TOP7 가성비 인기가전 모음</h2>
              <p>가격,성능,디자인까지</p>
            </div>
          </div>
          <Price/>
        </div>
      </div> */}
    </div>
  );
};

export default SingleCard;

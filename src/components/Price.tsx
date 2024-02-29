// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import DealCard from "./DealCard";

// interface ProductType {
//   id: string;
//   media: { uri: string }[];
//   title: string;
//   description: string;
//   rating: number;
//   priceInfo: { price: number }[];
//   type: string;
//   viewType: string;
//   items: {
//     uuid: string;
//     publication: {
//       title: string;
//       description: string;
//       rating: number;
//       media: { uri: string }[];
//       priceInfo: { price: number }[];
//     };
//   }[];
// }

// const Price = () => {
//   const [productsData, setProductsData] = useState<ProductType[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
//         const data = await response.json();

//         if (Array.isArray(data.items)) {
//           const filteredData = data.items.filter(
//             (item: { type: string; viewType: string }) => item.type === "SINGLE" && item.viewType === "TILE"
//           ) as ProductType[];
//           setProductsData(filteredData);
//         } else {
//           console.error("Expected array 'items' not found in API response:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching data from the API:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     pauseOnHover: false,
//   };

//   return (
//     <div className="container pt-6 lg:pt-0">
//       <Slider {...sliderSettings}>
//         {productsData.map((product) => (
//           <div key={product.id} className="product-card-container">
//             <div className="testimonial-container">
//               <div className="testimonial-title">
//                 <h2>{product.title}</h2>
//               </div>
//               <div className="testimonial-cards">
//                 {product.items.map((item) => (
//                   <DealCard
//                     key={item.uuid}
//                     img={item.publication.media[0]?.uri}
//                     title={item.publication.title}
//                     desc={item.publication.description}
//                     rating={item.publication.rating}
//                     price={item.publication.priceInfo?.price}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <br />


      
//     </div>
//   );
// };

// export default Price;

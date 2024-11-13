import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchRestaurantMenu } from "../../../store/homeSlice";
function Delivery({ gurgaonRestaurants }) {
  const dispatch=useDispatch()
    
  useEffect(()=>{
      dispatch(fetchRestaurantMenu())
  },[])
  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {gurgaonRestaurants.map((card) => (
        <Link to={`restaurant/${card.info.id}`}  key={card.info.id}>
        
        <div
         
          className="relative flex-shrink-0 m-2" // Adjust spacing between cards
          style={{ width: "273px" }}
        >
          {/* Image */}
          <div className="relative shadow-lg rounded-t-lg">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_273,h_183/${card.info.cloudinaryImageId}`}
              alt={card.accessibility?.altText || "Image"}
              className="w-[273px] h-[183px] object-cover rounded-t-lg"
            />

            {/* Bottom Overlay for Header & Subheader */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
              <h2 className="text-xs font-semibold text-white">
                {card.info.aggregatedDiscountInfoV3?.header ||
                  "No Discount"}{" "}
                {card.info.aggregatedDiscountInfoV3?.subHeader || ""}
              </h2>
            </div>
          </div>

          {/* Info Card at Bottom of Image with Shadow */}
          <div
            className="bg-white rounded-b-lg shadow-md mt-2"
            style={{ width: "261px", height: "100px" }}
          >
            <h3 className="text-sm font-bold">{card.info.name}</h3>
            <div className="flex items-center text-gray-600 text-xs space-x-1">
              <span className="text-green-600 font-semibold">
                {card.info.avgRating || "N/A"} ★
              </span>
              <span>•</span>
              <span>{card.info.sla.slaString || "N/A"}</span>
            </div>
            <p className="text-xs text-gray-500">
              {card.info.cuisines?.join(", ") || "N/A"}
            </p>
            <p className="text-xs text-gray-500">
              {card.info.areaName || "N/A"}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Delivery;

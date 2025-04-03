// src/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slider";
import TopRest from "./topRestaurant/TopRest";
import Delivery from "./online-delivery/Delivery";
import { fetchRestaurantsData } from "../../store/homeSlice"; // Adjust the path as necessary
import { FaCircleNotch } from "react-icons/fa"; // Import the loading spinner icon

function Home() {
  const dispatch = useDispatch();
  
  // Select data from Redux store
  const { data, cards, topRestaurants, gurgaonRestaurants, status } = useSelector((state) => state.home);
console.log("status", status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRestaurantsData());
    }
  }, [status, dispatch]);

  return (
    <>
     {status === "loading" && (
   
      <div className="flex flex-col justify-center items-center min-h-screen">
        <FaCircleNotch className="animate-spin text-3xl text-blue-500 mb-2" />
        <p className="text-gray-500 text-sm">Loading...</p>
     
      </div>
    )}
    {status === "failed" && (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-red-500 text-2xl font-semibold">Error loading data</h1>
        <p className="text-gray-500 text-sm">Please try again later.</p>
      </div>
    )
  }
  

      <div className="ml-32 font-bold text-2xl">
        <h1>{data ? data.data.cards[0].card.card.header.title : ""}</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Slider images={cards} />
      </div>
      <div className="ml-32 font-bold text-2xl mb-3">
        <h1>{data ? data.data.cards[1].card.card.header.title : ""}</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <TopRest TopCards={topRestaurants} />
      </div>
      <div className="ml-32 font-bold text-2xl mb-3">
        <h1>{data ? data.data.cards[2].card.card.title : ""}</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
       
        <Delivery gurgaonRestaurants={gurgaonRestaurants} />
      </div>
    </>
  );
}

export default Home;

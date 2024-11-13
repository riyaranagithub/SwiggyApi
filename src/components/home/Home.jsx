// src/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slider";
import TopRest from "./topRestaurant/TopRest";
import Delivery from "./online-delivery/Delivery";
import { fetchRestaurantsData } from "../../store/homeSlice"; // Adjust the path as necessary


function Home() {
  const dispatch = useDispatch();
  
  // Select data from Redux store
  const { data, cards, topRestaurants, gurgaonRestaurants, status } = useSelector((state) => state.home);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRestaurantsData());
    }
  }, [status, dispatch]);

  return (
    <>
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

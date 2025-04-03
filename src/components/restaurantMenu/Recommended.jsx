import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { addToCart } from "../../store/cartSlice"; // Import action
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Recommended() {
  const dispatch = useDispatch();
  const menuList = useSelector((state) => state.home.restaurantMenu);
  const length = menuList.length;

  // Function to handle adding item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Recommended ({length})</h1>

      {menuList.map((card) => {
        const {
          id,
          name,
          itemAttribute,
          defaultPrice,
          price,
          offerTags,
          ratings,
          description,
          imageId,
        } = card.card.info;

        const isVeg = itemAttribute?.vegClassifier === "VEG";

        return (
          <div
            key={id}
            className="mb-6 flex justify-between items-start w-3/5 mx-auto py-4 border-b"
          >
            {/* Details */}
            <div className="flex-1 pr-4">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2`}>
                  {isVeg ? (
                    <img src="/veg.png" alt="Vegetarian" className="w-4 h-4" />
                  ) : (
                    <img src="/nonVeg.png" alt="Non-Vegetarian" className="w-4 h-4" />
                  )}
                </div>
                <h2 className="text-lg font-medium">{name}</h2>
              </div>

              {/* Price and Offer */}
              <div className="flex items-center text-gray-600 mt-1">
                <FaRupeeSign className="text-sm mr-1" />
                <span className="text-md font-semibold">
                  {(defaultPrice || price) / 100}
                </span>
                {offerTags?.length > 0 && (
                  <span className="ml-2 text-sm text-green-600">
                    {offerTags[0].title} - {offerTags[0].subTitle}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 mt-1">
                <FaStar className="mr-1" />
                <span className="text-md font-semibold">
                  {ratings.aggregatedRating.rating}
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  ({ratings.aggregatedRating.ratingCountV2})
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mt-2">{description}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() =>
                  handleAddToCart({
                    id,
                    name,
                    price: (defaultPrice || price) / 100,
                    imageId,
                  })
                }
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>

            {/* Image */}
            <img
              className="w-24 h-24 object-cover rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              alt={name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Recommended;

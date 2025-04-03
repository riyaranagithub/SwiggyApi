import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { removeFromCart } from "../../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
// const length = cartItems.length;
console.log(cartItems);
  // Function to handle item removal with toast notification
  const handleRemoveFromCart = (id, name) => {
    dispatch(removeFromCart(id));
    toast.info(`${name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart ({cartItems.length})</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-4 flex justify-between items-center border-b pb-2">
            <div className="flex items-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <div className="flex items-center text-gray-600">
                  <FaRupeeSign className="text-sm mr-1" />
                  <span className="text-md font-semibold">{item.price}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleRemoveFromCart(item.id, item.name)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

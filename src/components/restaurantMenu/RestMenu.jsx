import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantMenu } from '../../store/homeSlice';
import Recommended from './Recommended';

function RestMenu() {
  const { restId } = useParams();
  const dispatch = useDispatch();
  const restaurantMenu = useSelector((state) => state.home.restaurantMenu);
  const isLoading = useSelector((state) => state.home.status) === 'loading';

  useEffect(() => {
    if (restId) {
      dispatch(fetchRestaurantMenu(restId));
    }
  }, [dispatch, restId]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-2xl">
        <Link to={`/restaurant/${restId}`}>
          {isLoading ? (
            <p className="text-lg font-semibold text-gray-600">Loading...</p>
          ) : restaurantMenu.length > 0 ? (
            <Recommended />
          ) : (
            <p className="text-lg font-semibold text-gray-600">No menu available for this restaurant.</p>
          )}
        </Link>
      </div>
    </div>
  );
}

export default RestMenu;

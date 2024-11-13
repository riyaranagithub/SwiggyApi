import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantMenu } from '../../store/homeSlice';
import Recommended from './Recommended';

function RestMenu() {
  const { restId } = useParams();
  const dispatch = useDispatch();
  const restaurantMenu = useSelector((state) => state.home.restaurantMenu); // Get the menu data from the store
  const isLoading = useSelector((state) => state.home.status) === 'loading'; // Check loading status

  useEffect(() => {
    if (restId) {
      dispatch(fetchRestaurantMenu(restId)); // Fetch menu data for the specific restaurant
    }
  }, [dispatch, restId]);

  return (
    <div>
      <Link to={`/restaurant/${restId}`}>
        {isLoading ? ( // Show loading message when fetching data
          <p>Loading...</p>
        ) : ( 
          // Check if restaurantMenu has data before rendering Recommended
          restaurantMenu.length > 0 ? (
            <Recommended />
          ) : (
            <p>No menu available for this restaurant.</p>
          )
        )}
      </Link>
    </div>
  );
}

export default RestMenu;

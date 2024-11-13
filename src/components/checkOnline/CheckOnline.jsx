import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOnline, setOffline } from '../../store/homeSlice';

function CheckOnline() {
  const online = useSelector((state) => state.home.online);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update the online/offline status based on the browser's network status
    const updateOnlineStatus = () => {
      if (navigator.onLine) {
        dispatch(setOnline());
      } else {
        dispatch(setOffline());
      }
    };

    // Initial check
    updateOnlineStatus();

    // Event listeners for online/offline
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [dispatch]);

  console.log(online);

 
}

export default CheckOnline;

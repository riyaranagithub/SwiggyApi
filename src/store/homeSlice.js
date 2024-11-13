import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch restaurant data
export const fetchRestaurantsData = createAsyncThunk(
  'home/fetchRestaurantsData',
  async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

// Fetch restaurant menu
export const fetchRestaurantMenu = createAsyncThunk(
  'home/fetchRestaurantMenu',
  async (restId) => {
    console.log("Restaurant ID:", restId);
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    console.log("menu", data);
    return data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: null,
    cards: [],
    topRestaurants: [],
    gurgaonRestaurants: [],
    restaurantMenu: [],
    status: 'idle',
    online: "true",
    error: null,
  },
  reducers: {
    filter: (state, action) => {
      const list = state.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      if (action.payload.length === 0) {
        state.gurgaonRestaurants = list;
      } else {
        const filterRest = list.filter((item) =>
          item.info.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.gurgaonRestaurants = filterRest;
      }
    },
    setOnline: (state) => {
      state.online = 'true';
    },
    setOffline: (state) => {
      state.online = 'false';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurantsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const result = action.payload;
        state.data = result;
        state.cards = result?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
        state.topRestaurants = result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        state.gurgaonRestaurants = result?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      })
      .addCase(fetchRestaurantsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchRestaurantMenu.pending, (state) => {
        state.status = 'loading';
        state.restaurantMenu = [];
      })
      .addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
        const result = action.payload;
        state.restaurantMenu = result?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
        state.status = 'succeeded';
      })
      .addCase(fetchRestaurantMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filter, setOffline, setOnline } = homeSlice.actions;
export default homeSlice.reducer;

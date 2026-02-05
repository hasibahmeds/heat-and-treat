import axios from "axios";

const BASE_URL = "http://localhost:4000";

// Storecontext.jsx connect

// FOOD
export const fetchFoodListService = () => {
  return axios.get(BASE_URL + "/api/food/list");
};

// CART
export const addToCartService = (itemId, token) => {
  return axios.post(
    BASE_URL + "/api/cart/add",
    { itemId },
    { headers: { token } }
  );
};

export const removeFromCartService = (itemId, token) => {
  return axios.post(
    BASE_URL + "/api/cart/remove",
    { itemId },
    { headers: { token } }
  );
};

export const loadCartDataService = (token) => {
  return axios.post(
    BASE_URL + "/api/cart/get",
    {},
    { headers: { token } }
  );
};

export { BASE_URL };

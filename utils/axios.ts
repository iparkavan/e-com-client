import axios from "axios";

const axiosProducts = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTS_ROUTES,
});

const axiosShop = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SHOP_ROUTES
})

const auth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH
})

const axiosUsers = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USERS
})

export {axiosProducts, axiosShop, auth, axiosUsers}
export default axiosProducts;

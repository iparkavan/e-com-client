import { axiosShop } from "../../utils/axios"

class ShopServices {
  async getShopProducts() {
    const res = await axiosShop.get("/")
    return res.data
  }

  // async getCart() {
  //   const res = await axiosShop.get('/cart')
  //   return res.data
  // }
}


export default new ShopServices
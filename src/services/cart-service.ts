
import { axiosShop } from "../../utils/axios"

class CartServices {

  async postCart(prodId: any) {
    const res = await axiosShop.post("/cart", prodId)
    return res.data
  }

  async getCart() {
    const res = await axiosShop.get("/cart")
    return res.data
  }

}

export default new CartServices()
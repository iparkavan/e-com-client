
import { AxiosRequestConfig } from "axios"
import { axiosProducts } from "../../utils/axios"
import { productTypes } from "../components/products/product-types"

class ProductServices {

  async getProducts(token: string) {
    const res = await axiosProducts.get("/products", {
      headers: {
        Authorization: "Bearer " + token
      }
    }) 
    return res.data
  }

  async addProduct(data: productTypes, token: string) {
    const res = await axiosProducts.post("/products/add-product", data, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    return res.data
  }

  async getProduct(prodId: string) {
    const res = await axiosProducts.get(`/products/${prodId}`)
    return res.data
  }

  async updateProduct(data: productTypes , token: string) {
      const res = await axiosProducts.put("/edit-product", data, {headers: {
        Authorization: "Bearer " + token
      }})
    return res.data
  }

  async deleteProduct(prodId: AxiosRequestConfig<string> , token: string) {
    const res = await axiosProducts.post('/delete-product', prodId, {headers: {
      Authorization: "Bearer " + token
    }})
    return res.data
  }

}

export default new ProductServices()
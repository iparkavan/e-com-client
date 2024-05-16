import { useQuery } from "@tanstack/react-query"
import shopService from "../services/shop-service"

const useGetShopProducts = () => {
  return useQuery({
    queryKey: ["shop"],
    queryFn: () => {
      return shopService.getShopProducts()
    }
  })
}

// const useGetCart = () => {
//   return useQuery({
//     queryKey: ["cart"],
//     queryFn: () => {
//       return shopService.getCart()
//     }
//   })
// }

export {
  useGetShopProducts,
  // useGetCart
}
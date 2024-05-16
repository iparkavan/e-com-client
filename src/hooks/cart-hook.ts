import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import cartService from "../services/cart-service"

const useAddToCart = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: (prodId: any) => {
      return cartService.postCart(prodId)
    }, 
    onSuccess: () => {
      queryClient.invalidateQueries(["add-to-cart"])
    }
  })
}

const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      return cartService.getCart()
    }
  })
}

export { useAddToCart, useGetCart }
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import productServices from "../services/product-services"
import { productTypes } from "../components/products/product-types"

const useAddProduct = (token: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["products"],
    mutationFn: (data: productTypes) => {
      return productServices.addProduct(data, token)
    }, 
    onSuccess: () => {
      queryClient.invalidateQueries(["products"])
    }
  })
}

const useGetProducts = (token: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return productServices.getProducts(token)
    }
  })
}

const useGetProductById = (prodId: string) => {
  return useQuery({
    queryKey: ["product-view"],
    queryFn: () => {
      return productServices.getProduct(prodId)
    },
  })

}

const useUpdateProduct = (token: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["update-product"],
    mutationFn: (data: productTypes) => {
      return productServices.updateProduct(data, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["update-product"])
    }
  })
}

const useDeleteProduct = (token: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: (prodId: any) => {
      return productServices.deleteProduct(prodId, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["delete-product"])
    }
  })
}


export { useAddProduct, useGetProducts, useGetProductById, useUpdateProduct, useDeleteProduct }
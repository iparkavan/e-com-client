import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import authServices from "../services/auth-services"
import { authTypes } from "../components/auth/auth-types"



export const useSignUp = () => {
  // const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (data: authTypes) => {
      return authServices.register(data)
    }, 
    // onSuccess: () => {
    //   QueryClient.invalidateQueries(["products"])
    // }
  })
}

export const useVerifyToken = (token: string) => {
  return useQuery({
    queryKey: ["token-validation"],
    queryFn: () => {
      return authServices.validateToken(token)
    }
  })
}




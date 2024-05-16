import { useQuery } from "@tanstack/react-query"
import userServices from "../services/user-services"



export const useCurrentUser = (userId: string) => {
  // console.log(userId)
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return userServices.getCurrentUser(userId)
    }
  })
}
import axios from "axios"
import { axiosUsers } from "../../utils/axios"



class UserServices {

  async getCurrentUser(userId: string) {
    // console.log("service User",userId)
    const res = await axiosUsers.get(`/${userId}`) 
    return res.data
  }

}

export default new UserServices
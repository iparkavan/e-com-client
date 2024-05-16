import { auth } from "../../utils/axios"
import { authTypes } from "../components/auth/auth-types"

class AuthServices {
  async register(data: authTypes) {
    const res = await auth.post("/register", data)
    return res.data
  }

  async validateToken(token: string) {
    console.log("sercives", token)
    const res = await auth.get("/verify-token", {
      headers: {
        Authorization: "Bearer " + token
      }
    }) 
    return res.data
  }
}

export default new AuthServices
import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { useEffect } from 'react'

// Define a type for the slice state
interface authState {
  token: string
  currentUser: {
    cart: {items:[]}
    username: string
    email: string
    _id:string
  }
}

// Define the initial state using that type
const initialState: authState = {
  token: "",
  currentUser: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      if (action.payload) {
        state.currentUser = action.payload
      }
    },
    setJwtToken: (state, action) => {
      state.token = action.payload
    }, 
  },
})

export const { setUserInfo, setJwtToken } = userSlice.actions


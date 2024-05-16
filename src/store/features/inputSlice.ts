import { createSlice } from "@reduxjs/toolkit";

interface inputState {
  searchIput: string
  filtererData: []
}

const initialState: inputState = {
  searchIput: "",
  filtererData: []

}

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchIput = action.payload
    },
    setFilterdData: (state, action) => {
      state.filtererData = action.payload
    }
  }
})

export const { setSearchInput, setFilterdData } = inputSlice.actions
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/authSlice'
import { inputSlice } from './features/inputSlice'

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    user: userSlice.reducer,
    commonInput: inputSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


import { createSlice } from '@reduxjs/toolkit'

// Creating a user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userDetails: {},
    userRepos: [],
    userGists: [],
    userOrgs: []
  },
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
    setUserRepos: (state, action) => {
      state.userRepos = action.payload
    },
    setUserGists: (state, action) => {
      state.userGists = action.payload
    },
    setUserOrgs: (state, action) => {
      state.userOrgs = action.payload
    }
  }
})

//// * * * Creating a user actions * * *
export const {
  setUser,
  setUserDetails,
  setUserRepos,
  setUserGists,
  setUserOrgs
} = userSlice.actions

export default userSlice.reducer

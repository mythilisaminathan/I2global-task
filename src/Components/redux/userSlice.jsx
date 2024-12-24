import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    email: "",
    password: ""
    
  },
  reducers: {
    setUserData: (state, action) => {
      const { userName, email, password } = action.payload;
      state.userName = userName;
      state.email = email;
      state.password = password;
      
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

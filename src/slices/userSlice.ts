import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: { usern: null },
  reducers: {
    setUser: (state, action) => {
      state.usern = action.payload;
    },

  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
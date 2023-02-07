import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
  url: string;
}

const initialState: UserState = {
  url: "https://vz.cnwimg.com/thumb-400x400/wp-content/uploads/2014/01/GettyImages-462041978.jpg",
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateProfileUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },

});

export const { updateProfileUrl } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProfileUrl = (state: RootState) => state.user.url;

export default userSlice.reducer;

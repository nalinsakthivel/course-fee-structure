import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fee: '',
  amount: '',
};

const userSlicer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setFee: (state, action) => ({
      ...state,
      fee: action.payload,
    }),
    setAmount: (state, action) => ({
      ...state,
      amount: action.payload,
    }),
  },
});

export default userSlicer.reducer;

export const {setFee, setAmount} = userSlicer.actions;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CategoryState {
  catergory: any;
}

const initialState: CategoryState = {
  catergory: [],
};

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<{catergory: any}>) => {
      console.log(action.payload?.category, 'action.payload');
      state.catergory = action.payload?.category;
    },
  },
});

export const {addCategory} = CategorySlice.actions;
export default CategorySlice.reducer;

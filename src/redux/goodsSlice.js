import { createSlice } from '@reduxjs/toolkit';



export const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    selectedCategory:'all'
  }
  ,
  reducers: {
    filterCategory:(state, action) => {state.selectedCategory = action.payload}
  },
})

// Action creators are generated for each case reducer function
export const getSelectedCategory = state => state.goods.selectedCategory
export const { filterCategory } = goodsSlice.actions
export default goodsSlice.reducer
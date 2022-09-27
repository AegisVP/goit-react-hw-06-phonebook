const { createSlice } = require('@reduxjs/toolkit');
const { initialFilter } = require('./constants');

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    searchFilter(filter, action) {
      filter.search = action.payload;
    },
  },
});

export const { searchFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

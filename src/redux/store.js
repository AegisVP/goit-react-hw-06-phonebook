import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './sliceFilter';
import { phonebookReducer } from './slicePhonebook';

const rootReducer = (state = {}, action) => {
  return {
    contacts: {
      filter: filtersReducer(state.contacts?.filter, action),
      items: phonebookReducer(state.contacts?.items, action),
    },
  };
};

export const store = configureStore({ reducer: rootReducer });

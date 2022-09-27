import { combineReducers } from 'redux';
import { phonebookReducer } from './slicePhonebook';
import { filtersReducer } from './sliceFilter';

const contactsReducer = combineReducers({
  items: phonebookReducer,
  filter: filtersReducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});

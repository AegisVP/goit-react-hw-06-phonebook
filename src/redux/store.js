import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer } from './filter/reducers';
import { phonebookReducer } from './phonebook/reducers';

const enhancer = devToolsEnhancer();

const rootReducer = (state = {}, action) => {
  return {
    contacts: {
      filter: filterReducer(state.contacts?.filter, action),
      items: phonebookReducer(state.contacts?.items, action),
    },
  };
};

export const store = createStore(rootReducer, enhancer);

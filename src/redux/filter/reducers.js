const { initialFilter } = require('redux/constants');

export const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    case 'filter/search':
      return {
        ...filter,
        search: action.payload.search,
      };

    default:
      return filter;
  }
};

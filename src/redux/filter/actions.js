import { createAction } from '@reduxjs/toolkit';

export const searchFilter = createAction('filter/search', search => {
  return {
    payload: { search },
  };
});
